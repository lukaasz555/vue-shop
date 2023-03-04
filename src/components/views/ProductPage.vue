<template>
	<main v-if="isLoading" class="info">
		<h2>fetching data...</h2>
	</main>

	<div v-else>
		<button @click="$router.back" class="goBackButton">
			{{ buttonContent }}
		</button>
		<main v-if="!isError" class="product__wrapper">
			<header>
				<div>
					<img :src="currentProduct.img" :alt="currentProduct.title" />
				</div>
				<section class="product__details">
					<h2>{{ currentProduct.title }}</h2>
					<p>Title: {{ currentProduct.title }}</p>
					<p>Authors: {{ currentProduct.authors.join(', ') }}</p>
					<p>Release year: {{ currentProduct.releaseYear }}</p>
					<p>Label: {{ currentProduct.label }}</p>
				</section>
				<section class="product__price">
					<p>
						{{ String(currentProduct.price.toFixed(2)).replace('.', ',') }} zł
					</p>
					<button @click="addToCart" class="addToCartButton">
						Add to cart
					</button>
				</section>
			</header>
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
	buttonContent: string;
	currentProduct: ProductModel;
}

export default defineComponent({
	data(): ProductPageData {
		return {
			id: '',
			isLoading: true,
			isError: false,
			buttonContent: '<< go back',
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

	methods: {
		addToCart() {
			this.$store.commit('ADD_PRODUCT', this.currentProduct);
		},
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

.info {
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
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

.addToCartButton {
	background-color: transparent;
	border: 1px solid #2e2e2e;
	padding: 0.75em 1.5em;
	font-size: 14px;
	text-transform: uppercase;
	cursor: pointer;
	background-color: #2e2e2e;
	color: white;
	transition: color 0.2s, background-color 0.2s;
	margin-top: 0.5em;
}

.addToCartButton:hover {
	color: #2e2e2e;
	background-color: transparent;
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
