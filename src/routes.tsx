const routes = [
	{
		name: 'Login',
		path: '/login',
		component: 'Login',
		sidebar: true,
		is_private: false,
	},
	{
		name: 'Profile',
		path: '/profile',
		component: 'Profile',
		sidebar: true,
		is_private: true,
	},
	{
		name: 'Practices',
		path: '/practices',
		component: 'Practices',
		sidebar: true,
		is_private: true,
	},
	{
		name: 'New Practice',
		path: '/practice/new',
		component: 'NewPractice',
		sidebar: false,
		is_private: true,
	},
	{
		name: 'View Practice',
		path: '/practice/:id',
		component: 'Practice',
		sidebar: false,
		is_private: true,
	},
]

export default routes;
