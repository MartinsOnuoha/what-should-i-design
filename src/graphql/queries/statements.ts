import gql from 'graphql-tag'

export const GET_STATEMENTS = gql`
  query GetStatements @cached {
    statements {
      id
      title
      description
      category {
        __typename
        id
        name
        emoji
      }
    }
  }
`
