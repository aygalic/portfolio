import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Header } from '../components/header'

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className={styles.container}>
      <Head>
        <title>Encoding RNA data</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Encoding RNA data.
        </h1>

        <p className={styles.description}>
          The evolution of the latent representation of BRCA data throughout the training procedure!
        </p>

        <iframe src="https://aygalic.github.io/biosequence_encoding/pca_animation.html" title="description" className={styles.subframe}></iframe>

        <p className={styles.description}>
          You can find the code used to build this dynamic representation <a href="https://github.com/aygalic/biosequence_encoding/" >here</a> as well as its <a href="https://aygalic.github.io/biosequence_encoding/">documentation</a>. 
        </p>

      </main>

      <footer className={styles.footer}>
        <p>
          Built with Next.js
        </p>
      </footer>

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