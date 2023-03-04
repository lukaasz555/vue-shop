import { createRouter, createWebHashHistory } from 'vue-router';
import TheHome from '../components/views/TheHome.vue';
import TheAlbums from '../components/views/TheAlbums.vue';
import NotFound from '../components/views/NotFound.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: TheHome,
	},

	{
		path: '/albums',
		name: 'Albums',
		component: TheAlbums,
	},

	{
		path: '/404',
		name: 'Not Found',
		component: NotFound,
	},

	{
		path: '/:catchAll(.*)',
		redirect: '/404',
	},
];

const router = createRouter({
	history: createWebHashHistory('http://localhost:8080/'),
	routes,
});

export default router;
