// router/index.js
import Home from '../pages/Home';
import About from '../pages/About';

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/about',
		component: About
	}
];

export default routes;
