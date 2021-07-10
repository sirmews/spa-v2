import gql from 'graphql-tag';

export const GET_PROFILE = gql`
  query getProfile {
    profile {
      id
      name
      email
    }
  }
`;
