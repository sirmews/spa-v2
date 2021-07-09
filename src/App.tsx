import {
  BrowserRouter as Router,
} from "react-router-dom";
import Practices from './practices/index';
import Layout from "./components/Layout";
import React, { Component } from "react";
import { ReactElement } from "react";


function App() {
  return (
    <div className="bg-gray-100 sm:mx-auto sm:w-full sm:max-w-2xl">
        <Router>
					<Layout/>
        </Router>
    </div>
  );
}

export default App;
