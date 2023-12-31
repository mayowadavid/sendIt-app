import Head from 'next/head'
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
