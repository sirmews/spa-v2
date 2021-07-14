import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { Redirect } from 'react-router-dom';
import { AUTH_LOGIN } from '../gql/mutations/login';
import Button from '../components/Button';
import { useHistory } from "react-router-dom";
import getAuthenticatedUser from '../utils/getAuthenticatedUser';


const Login = () => {

  const [credentials, setCredentials] = useState({});

  const history = useHistory();

	const [login] = useMutation(AUTH_LOGIN, {
		onCompleted({ login }) {
			if(login){
				localStorage.setItem('token', login.token as string);
				history.push('/practices');
			}
		}
	});

	if(getAuthenticatedUser()){
		return (<Redirect to='/practices' />)
	}

  return (
    <div className="sm:grid-cols-2 lg:grid-cols-2">
      <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
        <div className="p-4">
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            login({ variables: credentials });
            history.push('/practices')
          }}>
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="py-3 px-4 block w-full shadow-sm rounded-md"
                  onChange={(e) => setCredentials({...credentials, [e.target.name]: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-md font-medium text-gray-700">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="py-3 px-4 block w-full shadow-sm rounded-md"
                  onChange={(e) => setCredentials({...credentials, [e.target.name]: e.target.value})}
                />
              </div>
            </div>
            <div className="flex justify-end">
							<Button type="submit">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
