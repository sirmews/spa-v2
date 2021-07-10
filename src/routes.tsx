const routes = [
	{
		name: 'Login',
		path: '/login',
		component: 'Login',
		sidebar: true,
	},
	{
		name: 'Profile',
		path: '/profile',
		component: 'Profile',
		sidebar: true,
	},
	{
		name: 'Practices',
		path: '/practices',
		component: 'Practices',
		sidebar: true,
	},
	{
		name: 'New Practice',
		path: '/practice/new',
		component: 'NewPractice',
		sidebar: false,
	},
	{
		name: 'View Practice',
		path: '/practice/:id',
		component: 'Practice',
		sidebar: false,
	},
]

export default routes;
