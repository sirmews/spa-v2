import gql from 'graphql-tag';

export const GET_PRACTICE = gql`
  query getPractice($id: String!) {
    practices_by_pk(id: $id) {
      id
      name
      goal
    }
  }
`;