const setAuthenticatedUser = ({ token } : {token?: string}) => {

	localStorage.setItem('token', token as string);

	return true;
}

export default setAuthenticatedUser;
