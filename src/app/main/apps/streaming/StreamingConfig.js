import React from 'react';

const ChatAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/streaming',
			component: React.lazy(() => import('./StreamingApp'))
		}
	]
};

export default ChatAppConfig;
