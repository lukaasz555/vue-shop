import { createRouter, createWebHashHistory } from 'vue-router';
import TheHome from '../components/views/TheHome.vue';
import TheAlbums from '../components/views/TheAlbums.vue';
import NotFound from '../components/views/NotFound.vue';
import TheContact from '../components/views/TheContact.vue';
import TheCart from '../components/views/TheCart.vue';
import ProductPage from '../components/views/ProductPage.vue';

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
		path: '/contact',
		name: 'Contact',
		component: TheContact,
	},

	{
		path: '/cart',
		name: 'Cart',
		component: TheCart,
	},
	{
		path: '/albums/:id',
		name: 'Id',
		component: ProductPage,
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
