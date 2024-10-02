import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
//import '../../nextjs-blog/styles/global.css';

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className={styles.container}>
      <Head>
        <title>Encoding RNA data</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>

      <main>
        <h1 className={styles.title}>
          Encoding RNA data.
        </h1>

        <p className={styles.description}>
          The evolution of the latent representation of BRCA data throughout the training procedure!
        </p>

        <iframe src="https://aygalic.github.io/biosequence_encoding/pca_animation.html" title="description" className={styles.subframe}></iframe>

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