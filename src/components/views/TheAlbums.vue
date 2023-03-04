<template>
	<the-message v-if="isLoading">
		<h2>fetching products ...</h2>
	</the-message>

	<div v-else>
		<main v-if="!isError && products.length > 0" class="products__container">
			<ProductCard
				v-for="prod in products"
				:key="prod.id"
				:id="prod.id"
				:authors="prod.authors"
				:title="prod.title"
				:price="prod.price"
				:discount="prod.discount"
				:img="prod.img"
			></ProductCard>
		</main>
		<the-message>
			<h2 v-if="isError">
				Couldn't fetch products, try again. <br />
				:(
			</h2>
			<h2 v-else-if="!isError && products.length < 1">
				Currently we don't have any products <br />
				:(
			</h2>
		</the-message>
	</div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { ProductModel } from '../../models/Product';
import ProductCard from '../products/ProductCard.vue';

interface AlbumsData {
	products: ProductModel[];
	isError: boolean;
	isLoading: boolean;
}

export default defineComponent({
	data(): AlbumsData {
		return {
			products: [],
			isError: false,
			isLoading: true,
		};
	},
	component: {
		ProductCard,
	},
	created() {
		axios
			.get('http://localhost:4000/products/albums')
			.then((res) => {
				this.products = res.data.slice(0, 10);
				this.isError = false;
				if (res.status === 204) {
					this.isError = true;
				}
			})
			// eslint-disable-next-line no-unused-vars
			.catch((err) => {
				this.isError = true;
				console.log('error');
			})
			.finally(() => (this.isLoading = false));
	},
	components: { ProductCard },
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
