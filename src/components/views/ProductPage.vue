<template>
	<main v-if="isLoading" class="info">
		<h2>fetching data...</h2>
	</main>

	<div v-else>
		<main v-if="!isError">
			<h1>{{ currentProduct.title }}</h1>
		</main>
		<main v-else class="info">
			<h2>couldn't fetch product</h2>
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProductModel } from '@/models/Product';
import axios from 'axios';

interface ProductPageData {
	id: string;
	isLoading: boolean;
	isError: boolean;
	currentProduct: ProductModel;
}

export default defineComponent({
	data(): ProductPageData {
		return {
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
		};
	},

	mounted() {
		axios
			.get(`http://localhost:4000/products/${this.$route.params.id}`)
			.then((res) => {
				this.currentProduct = res.data;
				if (res.status === 204) {
					this.$router.push(`/404`);
				}
				this.isError = false;
				console.log(this.currentProduct);
			})
			.catch((err) => {
				console.log(err.name);
				this.isError = true;
			})
			.finally(() => (this.isLoading = false));
	},
});
</script>

<style scoped>
.info {
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
