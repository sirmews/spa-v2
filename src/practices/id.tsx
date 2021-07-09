import { useQuery, gql } from "@apollo/client";
import { GET_PRACTICE } from '../gql/queries/getPractice';
import { useParams } from "react-router-dom";

const Practice = () => {
  const { id } = useParams<{ id?: string }>();

  const { data, loading, error } = useQuery(GET_PRACTICE, {
    variables: {
      id: id
    }
  });

  if (loading) {
    return <h2>Loading Practices...</h2>;
  }

  if (error) {
    console.error(error)
    return <h2>Error :(</h2>
  }

  console.log(data);
  const { practices_by_pk: practice } = data;

  return (
    <ul className="sm:grid-cols-2 lg:grid-cols-2">
        <li className="bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">{practice.name}</h3>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">{practice.goal}</p>
            </div>
          </div>
        </li>
    </ul>
  );
}

export default Practice;
