import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import Body from '../components/Body'

export default function Home() {

  return (
    <Container minH={'100vh'}>
      <Head>
        <title>Darija</title>
        <meta name="description" content="Darija language app" />
        <link rel="icon" href="/darijaIcon.png" />
      </Head>
      <Body/>
    </Container>
  )
}
