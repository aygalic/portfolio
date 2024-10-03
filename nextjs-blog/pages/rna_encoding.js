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

        <h2>Background</h2>
        <p className={styles.text}>
          Transcriptomic (RNAseq) data is very high dimensional and difficult to deal with using classical statistical techniques.
          Autoencoder, a kind of neural network that focuses on reconstructing the input through a bottleneck have been of tremendous help tackling this issue.
          They enable us to work with smaller representations, enabling subsequent stratification, inference and visualizations.
        </p>


        <h2>Method</h2>
        <p className={styles.text}>
          I implemented a highly modular auto encoder approach where different part can be swapped out, assessing the performance of multiple approaches. 
          Such modules go from the type of layers we use (conventional multi layer perceptron (MLP), as well as convolutional neural network (CNN)) to the type of latent space we implement.
          The following approach were considered : No variational approach, Variational Autoencoder (VAE) and Vector-Quantized VAE (VQ-VAE).

        </p>

        <h2>Results</h2>

        <iframe src="https://aygalic.github.io/biosequence_encoding/pca_animation.html" title="description" className={styles.subframe}></iframe>

        <p className={styles.text}>
          Each point correspond to the patient representation through the encoder at different steps of the training process.

          This is achieved by training an auto encoder over RNAseq data from ~1200 patients provided openly by the TCGA project.
          At a given set of steps, we compute the PCA projection of the latent representation of the whole dataset and then put everything together in a nice smooth animation.
        
        </p>

        <h2>Going further</h2>
        <p className={styles.text}>
          Some automatic parameter search methods have been implemented. This was the goal of my thesis, where I assess the clustering capabilities on one dataset with a set of hyperparameter. 
          I would then use those same hyper parameters on a different set, with similar processing steps, hoping to discover an underlying structure within the target dataset.


          <br/>
          <br/>

          You can find the code used to build this dynamic representation and more <a href="https://github.com/aygalic/biosequence_encoding/" >on my github</a> as well as its <a href="https://aygalic.github.io/biosequence_encoding/">documentation</a>. 


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