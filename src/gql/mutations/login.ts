import gql from 'graphql-tag';

export const AUTH_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        id
        email
				token
    }
  }
`;
