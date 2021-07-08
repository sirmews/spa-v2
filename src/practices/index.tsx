import React, {useState} from 'react';
import { useQuery, gql } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";
import { GET_PRACTICES } from '../gql/queries/getPractices';
import { PlusCircleIcon } from '@heroicons/react/solid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Practices = () => {
  const { data, loading, error } = useQuery(GET_PRACTICES);

  if (loading) {
    return <h2>Loading Practices...</h2>;
  }

  if (error) {
    console.error(error)
    return <h2>Error :(</h2>
  }

  const { practices } = data;

  return (
    <ul className="flex flex-col space-y-6">
      <Link to={`/practice/new`}>
        <li className="col-span-1 border-4 border-dashed border-gray-200 rounded-lg cursor-pointer hover:border-gray-400">
          <div className="w-full flex items-center justify-between space-x-6 h-full">
            <div className="flex-1 flex flex-col items-center space-y-2">
                <p className="text-gray-400">New Practice</p>
                <PlusCircleIcon className="text-gray-400 h-8" />
            </div>
          </div>
        </li>
      </Link>
      {practices.map((practice: any, index: string) => (
        <Link key={index} to={`/practice/${practice.id}`}>
          <li className="flex flex-1 bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-sm font-medium truncate">{practice.name}</h3>
                </div>
                <p className="mt-1 text-gray-500 text-sm truncate">{practice.goal}</p>
                <div className="flex flex-row">
                {
                  practice.practice_events ? practice.practice_events.map((event: any, index: string) => (
                    <p key={index} className="text-sm flex-1 py-2">{event.date}</p>
                  )) : ''
                }
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