import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT
const GRAPHQL_TOKEN = process.env.GRAPHQL_TOKEN

const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    headers: {
        authorization: `Bearer ${GRAPHQL_TOKEN}`
    },
    cache: new InMemoryCache()
})

export default client