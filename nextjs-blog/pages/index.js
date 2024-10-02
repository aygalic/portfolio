import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Header } from '../components/header'

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className={styles.container}>
      <Head>
        <title>Aygalic Jara</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Aygalic Jara
        </h1>
        <h2>
          My best projects!
        </h2>

        <p className={styles.description}>
          Find out about my latest work!
        </p>

        <div className={styles.grid}>

          <a href="https://acrabstracts.org/abstract/identification-of-molecular-biomarkers-for-sjogrens-disease-stratification-via-a-deep-learning-foundation-model-dedicated-to-immune-mediated-and-inflammatory-disease/" className={styles.card}>
            <h3>My first peer reviewed paper! &rarr;</h3>
            <p>Identification of Molecular Biomarkers for Sjögren’s Disease Stratification via a Deep Learning Foundation Model Dedicated to Immune-Mediated and Inflammatory Disease.</p>
          </a>

          <a href="https://hdl.handle.net/10589/214686" className={styles.card}>
            <h3>My Thesis &rarr;</h3>
            <p>Genetic algorithm-driven auto-encoders: unraveling complex patterns in Parkinson's and breast cancer data</p>
          </a>

          <a href={`${basePath}/rna_encoding`} className={styles.card}>
            <h3>Some cool ML approach on Transcriptomic data &rarr;</h3>
            <p>Evolution of latent representation of BRCA data through encoder over the training procedure.</p>
          </a>


        </div>
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