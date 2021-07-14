import { Route, Redirect } from 'react-router-dom';
import getAuthenticatedUser from '../utils/getAuthenticatedUser';

const PrivateRoute = (
		{
			component: Component,
			...routeProps
		}: any
	) => {
  return (
    <Route {...routeProps} render={() =>
			getAuthenticatedUser() ? <Component /> : <Redirect to='/login' />
		}/>
  )
}

export default PrivateRoute;
