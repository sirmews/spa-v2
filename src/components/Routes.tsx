import { Switch, Route } from "react-router-dom";
import routes from '../routes';

import Practices from '../practices/index';
import Practice from '../practices/id';
import NewPractice from '../practices/new';

// define components based on strings
const componentRegistry: {
	[key: string]: React.ComponentType
} = {
	'Practices': Practices,
	'Practice': Practice,
	'NewPractice': NewPractice,
}

const Routes = () => (
	<Switch>
		{routes.map(({path, component}: any, key: any) => {
			return (
				componentRegistry[component] ? (
					<Route key={key} path={path} component={componentRegistry[component]}/>
				) : ''
			)
		})}
	</Switch>
)

export default Routes;
