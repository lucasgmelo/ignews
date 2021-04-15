import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.postsList}>
          <a>
            <time>dataaa</time>
            <strong>T'ituloooo</strong>
            <p>paragraphhh</p>
          </a>
          <a>
            <time>dataaa</time>
            <strong>T'ituloooo</strong>
            <p>paragraphhh</p>
          </a>
          <a>
            <time>dataaa</time>
            <strong>T'ituloooo</strong>
            <p>paragraphhh</p>
          </a>
        </div>
      </main>
    </>
  );
}
