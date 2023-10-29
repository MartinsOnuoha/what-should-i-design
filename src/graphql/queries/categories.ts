import gql from 'graphql-tag'

export const GET_CATEGORIES = gql`
  query GetCategories @cached {
    categories {
      id
      name
      emoji
    }
  }
`
