import gql from 'graphql-tag';

export const NEW_PRACTICE = gql`
  mutation newPractice($name: String!, $weekly_frequency: Int!, $goal: String!) {
    createPractice(name: $name, weekly_frequency: $weekly_frequency, goal: $goal) {
      id
      name
			goal
    }
  }
`;
