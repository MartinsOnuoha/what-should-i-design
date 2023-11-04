import gql from 'graphql-tag'
export const ADD_SAMPLE = gql`
  mutation AddSample($objects: [samples_insert_input!]!) {
    insert_samples(objects: $objects) {
      __typename
      affected_rows
    }
  }
`
