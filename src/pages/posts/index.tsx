import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>12 de março de 2021</time>
            <strong>Teste de título</strong>
            <p>Parágrafo</p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Teste de título</strong>
            <p>Parágrafo</p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Teste de título</strong>
            <p>Parágrafo</p>
          </a>
        </div>
      </main>
    </>
  );
}
