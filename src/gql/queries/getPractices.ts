import gql from 'graphql-tag';

export const GET_PRACTICES = gql`
  query getPractices {
    practices {
      id
      name
      goal
			weekly_frequency
      user {
        email
        id
      }
			events(done: true) {
        id
        done
        created_at
      }
    }
  }
`;
