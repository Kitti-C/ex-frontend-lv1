import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ex Frontend Lv1</title>
        <meta
          name="description"
          content="Generated by create ex frontend lv1 app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Frontend Demo App</a>
        </h1>

        <p className={styles.description}>Get started </p>

        <div>
          <p className={styles.lv}>Demo Lv1</p>
          <div className={styles.grid}>
            <Link href="/bonsai">
              <a className={styles.card}>
                <h2>Bonsai &rarr;</h2>
                <p>Frontend lv1.</p>
              </a>
            </Link>

            <Link href="/">
              <a className={styles.card}>
                <h2>#2 &rarr;</h2>
                <p>Frontend lv1.</p>
              </a>
            </Link>

            <Link href="/">
              <a className={styles.card}>
                <h2>#3 &rarr;</h2>
                <p>Frontend lv1.</p>
              </a>
            </Link>

            <Link href="/">
              <a className={styles.card}>
                <h2>#4 &rarr;</h2>
                <p>Frontend lv1.</p>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
