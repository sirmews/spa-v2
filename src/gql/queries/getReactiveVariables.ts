import gql from 'graphql-tag';

export const GET_REACTIVE_VARIABLE = gql`
  query getReactiveVariable {
    myReactiveVariable @client
  }
`;
