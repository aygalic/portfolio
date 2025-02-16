import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { useState, useEffect, useRef } from 'react';

async function getRandomWikipediaArticle() {
  const url = "https://en.wikipedia.org/w/api.php";
  const params = new URLSearchParams({
    origin: '*',
    action: "query",
    format: "json",
    list: "random",
    rnlimit: "1",
    rnnamespace: "0"
  });

  try {
    const response = await fetch(`${url}?${params}`);
    const data = await response.json();
    const title = data.query.random[0].title;
    const articleUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;
    return { title, articleUrl };
  } catch (error) {
    console.error('Error fetching random Wikipedia article:', error);
    return null;
  }
}

async function getArticleContent(title) {
  const url = "https://en.wikipedia.org/w/api.php";
  const params = new URLSearchParams({
    origin: '*',
    action: "query",
    format: "json",
    titles: title,
    prop: "extracts",
    explaintext: "true",
    exsectionformat: "plain"
  });

  try {
    const response = await fetch(`${url}?${params}`);
    const data = await response.json();
    const page = Object.values(data.query.pages)[0];
    return page.extract;
  } catch (error) {
    console.error('Error fetching article content:', error);
    return null;
  }
}

async function getLLMSummary(content) {
  try {
    const response = await fetch('https://aygalic-tiny-llama.hf.space/llm_on_cpu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item: `Make a very concise summary of the following article: ${content}` }),
    });
    
    const data = await response.json();
    console.log('Full API response:', data);  // Log the full response

    if (data) {
      return data;
    } else {
      console.error('Unexpected API response structure:', data);
      return null;
    }
  } catch (error) {
    console.error('Error getting LLM summary:', error);
    return null;
  }
}




export default function LLMDemo() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [articleUrl, setArticleUrl] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [llmSummary, setLlmSummary] = useState('');
  const [loading, setLoading] = useState(true);
  const [summarizing, setSummarizing] = useState(false);

  const [streamingSummary, setStreamingSummary] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const streamingApiUrl = 'https://aygalic-tiny-llama.hf.space/llm_on_cpu_stream';


  useEffect(() => {
    fetchRandomArticle();
  }, []);

  const fetchRandomArticle = async () => {
    setLoading(true);
    setLlmSummary('');
    const result = await getRandomWikipediaArticle();
    if (result) {
      setArticleUrl(result.articleUrl);
      const content = await getArticleContent(result.title);
      setArticleContent(content || 'Failed to load article content.');
    }
    setLoading(false);
  };

  // Update the handleSummarize function to log more information
  const handleSummarize = async () => {
    setSummarizing(true);
    console.log('Sending article content to LLM:', articleContent.substring(0, 500) + '...');  // Log the first 500 characters of the content
    const summary = await getLLMSummary(articleContent);
    console.log('Received summary:', summary);
    setLlmSummary(summary || 'Failed to generate summary.');
    setSummarizing(false);
  };

  const handleStreamingSummarize = async () => {
    setIsStreaming(true);
    setStreamingSummary('');

    try {
      const response = await fetch(streamingApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item: `Make a very concise summary of the following article: ${articleContent}` }),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const token = line.slice(6);
            setStreamingSummary(prev => prev + token);
          }
        }
      }
    } catch (error) {
      console.error('Error in streaming summary:', error);
    } finally {
      setIsStreaming(false);
    }
  };


    return (
    <div className={styles.container}>
      <Head>
        <title>Tiny Llama</title>
      <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Minimal LLM implementation.
        </h1>
        Built with Llama
        <p className={styles.text}>
          Using a quantized Llama 3.2 with 1B parameters.
          This demo simply summarize random wikipedia articles.
          In order to meet the requirement of file size for git-lfs, the model Has been quantized using <a href='https://github.com/ggerganov/llama.cpp'>llama.cpp</a>, reducing its size to ~700MB.
          The model was then deployed on <a href="https://huggingface.co/spaces/aygalic/tiny-llama">Hugging Face Spaces</a> through github action.
          <br/>
          Despite its relatively small size the performance are quite poor since the model is running (for free) on 2 vCPU cores.
          <br/>
          You can find the code for the API and quantization script on <a href="https://github.com/aygalic/llama-summarizer">github</a> as well as all the machinery for hugging face deployment.
        </p>

        <div className={styles.subframe}>
          <h2>Random Wikipedia Article</h2>
          <button onClick={fetchRandomArticle}>
            New Article
          </button>
          <br/>

          {loading ? (
            <div >

            </div>
          ) : (
            <iframe 
              src={articleUrl} 
              className={styles.wikipedia}
              title="Random Wikipedia Article"
            />
          )}
        </div>
        <div className={styles.hidden} >
          <div className={styles.subframe} >
            <h3>Article Content</h3>
            <div>
              {loading ? 'Loading...' : articleContent}
            </div>
          </div>
        </div>
          
        <div className={styles.hidden} >
          <div className={styles.subframe}>
            <button onClick={handleSummarize} disabled={loading || summarizing} >
              {summarizing ? 'Summarizing...' : 'Summarize with LLM'}
            </button>
            {llmSummary && (
              <div>
                <h3 >LLM Summary</h3>
                <div>
                  {llmSummary}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.subframe}>
          <button onClick={handleStreamingSummarize} disabled={loading || isStreaming}>
            {isStreaming ? 'Generating Summary...' : 'Get Summary'}
          </button>
          {streamingSummary && (
            <div>
              <h3>Streaming LLM Summary</h3>
              <div>{streamingSummary}</div>
            </div>
          )}
        </div>

      </main>

      <Footer />
    </div>
  );
}
