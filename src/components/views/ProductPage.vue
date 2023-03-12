<template>
	<the-message v-if="state.isLoading">
		<h2>fetching data...</h2>
	</the-message>

	<div v-else>
		<main v-if="!state.isError" class="product__wrapper">
			<button @click="$router.back" class="goBackButton">
				{{ buttonContent }}
			</button>
			<header>
				<div>
					<img
						:src="state.currentProduct.img"
						:alt="state.currentProduct.title"
					/>
				</div>
				<section class="product__details">
					<h2>{{ state.currentProduct.title }}</h2>
					<p>Title: {{ state.currentProduct.title }}</p>
					<p>Authors: {{ state.currentProduct.authors.join(', ') }}</p>
					<p>Release year: {{ state.currentProduct.releaseYear }}</p>
					<p>Label: {{ state.currentProduct.label }}</p>
				</section>
				<section class="product__price">
					<p>
						{{
							String(state.currentProduct.price.toFixed(2)).replace('.', ',')
						}}
						zł
					</p>
					<the-button> Add to cart </the-button>
				</section>
			</header>
		</main>
		<the-message v-else>
			<h2>couldn't fetch product</h2>
		</the-message>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
// import { store } from '../../store/store';
import { ProductPageData } from '../../models/PagesData';
import axios from 'axios';

const router = useRouter();
const route = useRoute();

const buttonContent = '<< go back';

const state: ProductPageData = reactive({
	id: '',
	isLoading: true,
	isError: false,
	currentProduct: {
		id: '',
		title: '',
		authors: [],
		releaseYear: '',
		description: '',
		img: '',
		thumbnail: '',
		price: 0,
		discount: 0,
		categoryID: 0,
		format: 'CD',
		type: 'albums',
	},
});

onMounted(() => {
	axios
		.get(`http://localhost:4000/products/${route.params.id}`)
		.then((res) => {
			state.currentProduct = res.data;
			if (res.status === 204) {
				router.push(`/404`);
				console.log('should redirect to 404');
			}
			state.isError = false;
		})
		.catch((err) => {
			console.log(err.name);
			state.isError = true;
		})
		.finally(() => (state.isLoading = false));
});

// const addToCart = () => store.commit('ADD_PRODUCT', state.currentProduct);
</script>

<style scoped>
div {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}
.product__wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 2em;
	margin-bottom: 3em;
}

header {
	display: flex;
	flex-direction: column;
	align-items: start;
}

.product__details {
	margin-top: 2em;
}

div > img {
	box-shadow: 4px 8px 22px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
}

.goBackButton {
	border: none;
	background-color: transparent;
	cursor: pointer;
	text-transform: uppercase;
	margin-bottom: 3em;
}

.goBackButton:hover {
	text-decoration: underline;
}

.product__price {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-top: 2em;
	padding-top: 1em;
	width: 90%;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	align-self: center;
}

.product__price p {
	font-size: 18px;
	font-weight: 600;
}
</style>
