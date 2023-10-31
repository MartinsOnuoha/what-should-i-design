import gql from 'graphql-tag'

export const GET_STATEMENTS = gql`
  query GetStatements($where: statements_bool_exp) @cached {
    statements(where: $where) {
      id
      title
      description
      samples {
        id
        url
      }
      category {
        id
        name
        emoji
      }
    }
  }
`
