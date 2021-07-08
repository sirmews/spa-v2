import gql from 'graphql-tag';

export const NEW_PRACTICE = gql`
  mutation newPractice($name: String!, $weekly_frequency: bigint!) {
    insert_practices(objects: { name: $name, weekly_frequency: $weekly_frequency }) {
      affected_rows
      returning {
        id
        name
      }
    }
  }
`;