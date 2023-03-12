<template>
	<the-message v-if="state.isLoading">
		<h2>fetching products ...</h2>
	</the-message>

	<div v-else>
		<main
			v-if="!state.isError && state.products.length > 0"
			class="products__container"
		>
			<ProductCard
				v-for="prod in state.products"
				:key="prod.id"
				:id="prod.id"
				:authors="prod.authors"
				:title="prod.title"
				:price="prod.price"
				:discount="prod.discount"
				:img="prod.img"
			></ProductCard>
			<p v-for="prod in state.products" :key="prod.id">{{ prod.title }}</p>
		</main>
		<the-message>
			<h2 v-if="state.isError">
				Couldn't fetch products, try again. <br />
				:(
			</h2>
			<h2 v-else-if="!state.isError && state.products.length < 1">
				Currently we don't have any products <br />
				:(
			</h2>
		</the-message>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { AlbumsPageData } from '../../models/PagesData';
import ProductCard from '../products/ProductCard.vue';
import axios from 'axios';

const state: AlbumsPageData = reactive({
	isError: false,
	isLoading: true,
	products: [],
});

onMounted(() => {
	axios
		.get('http://localhost:4000/products/albums')
		.then((res) => {
			state.products = res.data.slice(0, 10);
			state.isError = false;
			if (res.status === 204) {
				state.isError = true;
			}
		})
		// eslint-disable-next-line no-unused-vars
		.catch((err) => {
			state.isError = true;
		})
		.finally(() => (state.isLoading = false));
});
</script>

<style scoped>
main.products__container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

main.info {
	width: 100%;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
