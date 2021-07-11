import { useQuery } from '@apollo/client';
import { GET_PRACTICE } from '../gql/queries/getPractice';
import { useParams } from 'react-router-dom';
import PracticeEventFeed from '../components/practices/PracticeEventFeed';

const Practice = () => {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useQuery(GET_PRACTICE, {
    variables: {
      id: parseInt(id)
    }
  });

  if (loading) {
    return <h2>Loading Practices...</h2>;
  }

  if (error) {
    console.error(error)
    return <h2>Error :(</h2>
  }

  const { practice } = data;
	console.log(practice);

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

				<div className="w-full flex items-center justify-between p-6 space-x-6">
					<PracticeEventFeed events={practice.events} />
				</div>
			</div>
  );
}

export default Practice;
