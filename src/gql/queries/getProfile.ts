import gql from 'graphql-tag';

export const GET_PROFILE = gql`
  query getProfile($created_at: DateRange) {
    profile {
      id
      name
      email
			practices {
				id
				name
				goal
				weekly_frequency
				events(done: true, created_at: $created_at) {
					id
					done
					created_at
				}
			}
    }
  }
`;
