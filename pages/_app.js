import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import Layout from '../components/layout'
import client from '../graphql/gqlClient'
import { store } from '../redux/store'
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Provider>
    </ApolloProvider>
  )
}
export default MyApp