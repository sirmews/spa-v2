import gql from 'graphql-tag';

export const GET_PRACTICES = gql`
  query getPractices {
    practices {
      id
      name
      goal
      user {
        email
        first_name
        id
        last_name
      }
      practice_events(where: {date: {_lte: "2020-10-14"}}) {
        date
        done
        id
      }
    }
  }
`;