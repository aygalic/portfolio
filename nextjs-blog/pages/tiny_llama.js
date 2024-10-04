import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { useState, useEffect } from 'react';

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
      body: JSON.stringify({ item: `Summarize the following article: ${content}` }),
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

    return (
    <div className={styles.container}>
      <Head>
        <title>Tiny Llama</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          LLM.
        </h1>

        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 p-4">
          <div className="w-full max-w-4xl h-3/4 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
              <h2 className="text-xl font-bold">Random Wikipedia Article</h2>
              <button 
                onClick={fetchRandomArticle}
                className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-100 transition-colors"
              >
                New Article
              </button>
            </div>
            <div className="h-full">
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <iframe 
                  src={articleUrl} 
                  className="w-full h-full border-none"
                  title="Random Wikipedia Article"
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Article Content</h3>
          <div className="max-h-96 overflow-y-auto mb-4">
            {loading ? 'Loading...' : articleContent}
          </div>
          <button 
            onClick={handleSummarize}
            disabled={loading || summarizing}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors disabled:bg-gray-400"
          >
            {summarizing ? 'Summarizing...' : 'Summarize with LLM'}
          </button>
        </div>

        {llmSummary && (
          <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">LLM Summary</h3>
            <div className="max-h-96 overflow-y-auto">
              {llmSummary}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
