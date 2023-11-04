import gql from 'graphql-tag'

export const GET_STATEMENTS = gql`
  query GetStatements($where: statements_bool_exp) @cached {
    statements(where: $where) {
      __typename
      id
      title
      description
      samples {
        __typename
        id
        url
      }
      category {
        __typename
        id
        name
        emoji
      }
    }
  }
`
