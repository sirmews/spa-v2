import gql from 'graphql-tag';

export const AUTH_LOGOUT = gql`
  mutation logout($token: String!) {
    logout(token: $token)
  }
`;
