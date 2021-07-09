const routes = [
	{
		name: 'Practices',
		path: '/practices',
		component: 'Practices',
		sidebar: true,
	},
	{
		name: 'View Practice',
		path: '/practice/:id',
		component: 'Practice',
		sidebar: false,
	},
	{
		name: 'New Practice',
		path: '/practice/new',
		component: 'NewPractice',
		sidebar: false,
	}
]

export default routes;
