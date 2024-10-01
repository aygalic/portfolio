import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className={styles.container}>
      <Head>
        <title>Aygalic Jara</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to my portfolio site.
        </h1>

        <p className={styles.description}>
          Find out about my latest work!
        </p>

        <div className={styles.grid}>

          <a href="https://acrabstracts.org/abstract/identification-of-molecular-biomarkers-for-sjogrens-disease-stratification-via-a-deep-learning-foundation-model-dedicated-to-immune-mediated-and-inflammatory-disease/" className={styles.card}>
            <h3>My first peer reviewed paper! &rarr;</h3>
            <p>Identification of Molecular Biomarkers for Sjögren’s Disease Stratification via a Deep Learning Foundation Model Dedicated to Immune-Mediated and Inflammatory Disease.</p>
          </a>

          <a href="https://www.politesi.polimi.it/handle/10589/214686" className={styles.card}>
            <h3>My Thesis &rarr;</h3>
            <p>Genetic algorithm-driven auto-encoders: unraveling complex patterns in Parkinson's and breast cancer data</p>
          </a>


        </div>
      </main>

      <footer>
        <p>
          Built with Next.js
        </p>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}