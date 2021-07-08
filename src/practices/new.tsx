import React, {useState} from 'react';
import { useMutation, gql } from "@apollo/client";
import { NEW_PRACTICE } from '../gql/mutations/newPractice';
import { GET_PRACTICES } from '../gql/queries/getPractices';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";

const NewPractice = () => {

  const [practice, setPractice] = useState({});

  const history = useHistory();

  const updateCache = (cache: any, {data}: any) => {
    // Fetch the practices from the cache
    const existingPractices = cache.readQuery({
      query: GET_PRACTICES
    });
    
    // Add the new practice to the cache
    const newPractice = data.insert_practices.returning[0];
    cache.writeQuery({
      query: GET_PRACTICES,
      data: {practice: [newPractice, ...existingPractices.practices]}
    });
  };

  const [addPractice] = useMutation(NEW_PRACTICE, {update: updateCache});

  return (
    <div className="sm:grid-cols-2 lg:grid-cols-2">
      <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
        <div className="p-4">
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            addPractice({ variables: practice });
            history.push('/practices')
          }}>
            <div>
              <label htmlFor="name" className="block text-md font-medium text-gray-700">
                Practice 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="py-3 px-4 block w-full shadow-sm rounded-md"
                  onChange={(e) => setPractice({...practice, [e.target.name]: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label htmlFor="weekly_frequency" className="block text-md font-medium text-gray-700">
                Weekly Frequency 
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  step="1"
                  pattern="\d+"
                  name="weekly_frequency"
                  id="weekly_frequency"
                  className="py-3 px-4 block w-full shadow-sm rounded-md"
                  onChange={(e) => setPractice({...practice, [e.target.name]: parseInt(e.target.value)})}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPractice;