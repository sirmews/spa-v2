const getAuthenticatedUser = () => {
	const token = localStorage.getItem('token');

	return token ? token : false;
}

export default getAuthenticatedUser;
