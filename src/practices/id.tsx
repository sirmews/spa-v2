import { useQuery, useMutation } from '@apollo/client';
import { format } from 'date-fns';
import { GET_PRACTICE } from '../gql/queries/getPractice';
import { CREATE_PRACTICE_EVENT } from '../gql/mutations/createPracticeEvent';
import { useParams } from 'react-router-dom';
import PracticeEventFeed from '../components/practices/PracticeEventFeed';

const Practice = () => {
  const { id } = useParams<{ id: string }>();

	const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

  const { data, loading, error } = useQuery(GET_PRACTICE, {
    variables: {
      id: parseInt(id)
    }
  });

	const [addPracticeEvent] = useMutation(CREATE_PRACTICE_EVENT);

  if (loading) {
    return <h2>Loading Practices...</h2>;
  }

  if (error) {
    console.error(error)
    return <h2>Error :(</h2>
  }

  const { practice } = data;

  return (
			<div className="bg-white rounded-lg shadow divide-y divide-gray-200">
				<div className="w-full flex items-center justify-between p-6 space-x-6">
					<div className="flex-1 truncate">
						<div className="flex items-center space-x-3">
							<h3 className="text-lg leading-6 font-medium text-gray-900">{practice.name}</h3>
						</div>
						<p className="mt-1 text-gray-500 text-sm truncate">{practice.goal}</p>
					</div>
				</div>
				<div className="w-full flex flex-col p-6 space-y-8">
						<div className="flex flex-col justify-stretch">
              <button onClick={(event: React.MouseEvent<HTMLElement>) => addPracticeEvent(
								{
									variables: {
										practice_id: parseInt(practice.id),
										done: true,
										created_at:
										currentDate
									}
								}
							)} type="button" className="inline-flex justify-center items-center px-3 py-2 border border-gray-500 text-sm leading-4 font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none">
                Log Event
              </button>
            </div>
						<PracticeEventFeed events={practice.events} />
				</div>
			</div>
  );
}

export default Practice;
