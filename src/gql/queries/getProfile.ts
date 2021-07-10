import gql from 'graphql-tag';

export const GET_PROFILE = gql`
  query getProfile {
    profile {
      id
      name
      email
			practices {
				id
				name
				goal
				weekly_frequency
				events(done: true) {
					id
					done
					created_at
				}
			}
    }
  }
`;
