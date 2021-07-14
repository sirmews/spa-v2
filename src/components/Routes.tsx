import { Switch, Route } from "react-router-dom";
import routes from '../routes';

import PrivateRoute from "./PrivateRoute";

import Login from "../auth/login";
import Profile from "../auth/profile";
import Practices from '../practices/index';
import Practice from '../practices/id';
import NewPractice from '../practices/new';

// define components based on strings
const componentRegistry: {
	[key: string]: React.ComponentType
} = {
	'Login': Login,
	'Profile': Profile,
	'Practices': Practices,
	'Practice': Practice,
	'NewPractice': NewPractice,
}

const Routes = () => (
	<Switch>
		{routes.map(({path, is_private, component}: any, key: any) => {

			if(componentRegistry[component]){
				if(is_private){
					return (
						<PrivateRoute key={key} path={path} component={componentRegistry[component]}/>
					)
				}
				return (
					<Route key={key} path={path} component={componentRegistry[component]}/>
				)
			}

			return '';

		})}
	</Switch>
)

export default Routes;
