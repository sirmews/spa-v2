import {
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from "./components/Layout";


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
