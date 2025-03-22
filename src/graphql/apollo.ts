import {
  ApolloClient,
  createHttpLink,
  type DefaultOptions,
  from,
  InMemoryCache
} from '@apollo/client/core'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_APP_GRAPHQL_URL,
  headers: {
    'x-hasura-role': 'public'
  }
})
const links = [httpLink]
const cache = new InMemoryCache()
const defaultOptions: DefaultOptions = {
  query: {
    fetchPolicy: 'cache-first', // Ignore cache completely to prevent stale data.
    errorPolicy: 'all'
  }
}

export const apolloClient = new ApolloClient({
  link: from(links),
  cache,
  defaultOptions,
  queryDeduplication: false
})
