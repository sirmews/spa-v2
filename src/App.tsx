import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Practices from './practices/index';
import Practice from './practices/id';
import NewPractice from './practices/new';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';
import React, { Component } from "react";
import { ReactElement } from "react";

// define components based on strings
const componentRegistry: {
	[key: string]: React.ComponentType
} = {
	'Practices': Practices,
	'Practice': Practice,
	'NewPractice': NewPractice,
}

function App() {
  return (
    <div className="bg-gray-100 sm:mx-auto sm:w-full sm:max-w-md">

        <Router>
					<Header/>
					<div className="px-4 py-4 mb-8 mt-4">
						<Switch>
							{routes.map(({path, component}: any, key: any) => {
								return (
									componentRegistry[component] ? (
										<Route key={key} path={path} component={Practices}/>
									) : ''
								)
							})}
						</Switch>
					</div>
					<Footer/>
        </Router>

    </div>
  );
}

export default App;
