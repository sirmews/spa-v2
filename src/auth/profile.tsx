import { useQuery } from "@apollo/client";
import { GET_PROFILE } from '../gql/queries/getProfile';

const Profile = () => {
  const { data, loading, error } = useQuery(GET_PROFILE);

  if (loading) {
    return <h2>Loading Practices...</h2>;
  }

  if (error) {
    console.error(error)
    return <h2>Error :(</h2>
  }

  const { profile } = data;

  return (
    <ul className="sm:grid-cols-2 lg:grid-cols-2">
        <li className="bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">{profile.name}</h3>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">{profile.email}</p>
            </div>
          </div>
        </li>
    </ul>
  );
}

export default Profile;
