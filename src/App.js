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

function App() {
  return (
    <div className="bg-gray-100 sm:mx-auto sm:w-full sm:max-w-md">
      <Header/>
      <div className="px-4 py-4 mb-8 mt-4">
        <Router>
          <Switch>
            <Route path="/practices">
              <Practices />
            </Route>
            <Route path={`/practice/new`}>
              <NewPractice />
            </Route>
            <Route path={`/practice/:id`}>
              <Practice />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;