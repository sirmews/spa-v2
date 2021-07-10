import gql from 'graphql-tag';

export const GET_PRACTICE = gql`
  query getPractice($id: Int!) {
    practice(id: $id) {
      id
      name
      goal
    }
  }
`;
