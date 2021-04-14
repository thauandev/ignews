import styles from "./styles.module.scss";

import { GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import Head from "next/head";

import { getPrismicClient } from "../../services/prismic";

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    {
      fetch: ["post.title", "post.content"],
      pageSize: 100,
    }
  );

  console.log(response);

  return {
    props: {},
  };
};
