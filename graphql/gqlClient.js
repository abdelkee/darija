import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT,
    headers: {
        authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
    },
    cache: new InMemoryCache()
})

export default client