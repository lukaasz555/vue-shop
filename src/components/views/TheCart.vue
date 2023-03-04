<template>
	<div>
		<main>
			<h2>{{ title }}</h2>
			<ul v-for="(prod, i) in products" :key="i + prod.id">
				<ProductInCart
					:id="prod.id"
					:authors="prod.authors"
					:price="prod.price"
					:title="prod.title"
				/>
			</ul>
			<p class="totalValue">TOTAL: {{ totalValue }}</p>
			<the-button> next </the-button>
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductInCart from '../products/ProductInCart.vue';
import TheButton from '../UI/TheButton.vue';
import { getTotalValue } from '@/helpers/getTotalValue';
import { handlePriceFormat } from '@/helpers/handlePriceFormat';

export default defineComponent({
	data() {
		return {
			title: 'Your cart',
		};
	},
	computed: {
		products() {
			return this.$store.getters.productsInCart;
		},
		totalValue() {
			const totalValue = getTotalValue(this.$store.getters.productsInCart);
			return handlePriceFormat(totalValue);
		},
	},
	components: {
		ProductInCart,
		TheButton,
	},
});
</script>

<style scoped>
div {
	display: flex;
	justify-content: center;
}

main {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 320px;
	width: 50%;
	max-width: 500px;
	box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.1);
	padding: 2em;
	border-radius: 8px;
}

h2 {
	margin-bottom: 1.5em;
}

.totalValue {
	font-size: 20px;
	margin: 1em 0 0.5em;
}
</style>
