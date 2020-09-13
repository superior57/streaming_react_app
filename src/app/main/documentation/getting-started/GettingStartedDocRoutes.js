import React from 'react';

const GettingStartedDocRoutes = [
	{
		path: '/documentation/getting-started/introduction',
		component: React.lazy(() => import('./introduction/IntroductionDoc'))
	},
	{
		path: '/documentation/getting-started/installation',
		component: React.lazy(() => import('./installation/InstallationDoc'))
	}
];

export default GettingStartedDocRoutes;
