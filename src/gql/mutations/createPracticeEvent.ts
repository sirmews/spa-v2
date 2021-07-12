import gql from 'graphql-tag';

export const CREATE_PRACTICE_EVENT = gql`
  mutation createPracticeEvent($practice_id: Int!, $done: Boolean!, $created_at: DateTime!) {
    createPracticeEvent(practice_id: $practice_id, done: $done, created_at: $created_at) {
      id
      done
			created_at
    }
  }
`;
