import Head from 'next/head'
import Body from '../components/Body'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Darija</title>
        <meta name="description" content="Darija language app" />
        <link rel="icon" href="/darijaIcon.png" />
      </Head>
      <Body/>
    </div>
  )
}
