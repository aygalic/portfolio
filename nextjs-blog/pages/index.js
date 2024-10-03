import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Header } from '../components/header'
import { Footer } from '../components/footer'

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
        <br/>
        <br/>
        <div className={styles.logoContainer}>
          <Image
            src={`${basePath}/polimi.png`}
            alt="my desk"
            width={817}
            height={208}
            className={styles.logo}
          />
          <Image
            src={`${basePath}/centrale_nantes.png`}
            alt="my desk"
            width={1830}
            height={1033}
            className={styles.logo}
          />
        </div>
        <br/>
        <br/>
        <p className={styles.description}>
        Fresh graduate from a double degree between Ecole Centrale de Nantes and Politecnico di Milano.
        <br/>
        I have studied statistics, machine learning and their application to life science to be part of a change that matters to me.
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
            <h3> ★ Machine Learning applied to Transcriptomic data &rarr;</h3>
            <p>Evolution of latent representation of BRCA data through encoder over the training procedure.</p>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}