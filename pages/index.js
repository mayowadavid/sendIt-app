import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../components/general/home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sendit</title>
        <meta name="description" content="easy logistics app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HomePage />
    </div>
  )
}
