import { useQuery } from "@apollo/client";
import { GET_PROFILE } from '../gql/queries/getProfile';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { Link } from "react-router-dom";
import { startOfWeek, endOfWeek, format } from "date-fns";
import PracticeEventRow from "../components/practices/PracticeEventRow";

const Practices = () => {
  const { data, loading, error } = useQuery(GET_PROFILE, {
    variables: {
      created_at: {
				from: format(startOfWeek(new Date(), { weekStartsOn: 1 }), "yyyy-MM-dd"),
				to: format(endOfWeek(new Date(), { weekStartsOn: 1 }), "yyyy-MM-dd")
			}
    }
  });

  if (loading) {
    return <h2>Loading Practices...</h2>;
  }

  if (error) {
    console.error(error)
    return <h2>Error :(</h2>
  }

	const { profile } = data;
	const { practices } = profile;

  return (
    <ul className="flex flex-col space-y-6">
      <Link to={`/practice/new`}>
        <li className="col-span-1 border-4 border-dashed border-gray-200 rounded-lg cursor-pointer hover:border-gray-400">
          <div className="w-full flex items-center justify-between space-x-6 h-full">
            <div className="flex-1 flex flex-row justify-center items-center space-x-2 p-4">
                <p className="text-gray-400">New Practice</p>
                <PlusCircleIcon className="text-gray-400 h-6" />
            </div>
          </div>
        </li>
      </Link>
      {practices.map((practice: any, index: string) => (
        <Link key={index} to={`/practice/${practice.id}`} className="">
          <li className="flex flex-1 bg-white rounded-lg shadow hover:shadow-md divide-y divide-gray-200">
            <div className="p-6 flex flex-1 space-y-3">
              <div className="flex flex-1 flex-col space-y-3">
                <div className="">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{practice.name}</h3>
                </div>
                <p className="text-gray-500 text-sm break-words">{practice.goal}</p>
                <div className="flex flex-row w-full space-x-0.5 overflow-hidden rounded-xl">
									<PracticeEventRow practice={practice}/>
                </div>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Practices;
