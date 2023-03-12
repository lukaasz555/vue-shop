<template>
	<div>
		<main v-if="products.length > 0">
			<h2>Your cart</h2>
			<button @click="store.$reset()">clear cart</button>
			<ul v-for="(prod, i) in products" :key="i + prod.id">
				<ProductInCart
					:id="prod.id"
					:authors="prod.authors"
					:price="prod.price"
					:title="prod.title"
				/>
			</ul>
			<p class="totalValue">TOTAL: {{ handlePriceFormat(totalValue) }}</p>
			<the-button> next </the-button>
		</main>
		<main v-else>
			<h2>Your cart</h2>
			<p>... is currently empty</p>
			<p><RouterLink to="/albums">click here</RouterLink> to pick something</p>
		</main>
	</div>
</template>

<script setup lang="ts">
import ProductInCart from '../products/ProductInCart.vue';
import TheButton from '../UI/TheButton.vue';
import { getTotalValue } from '@/helpers/getTotalValue';
import { handlePriceFormat } from '@/helpers/handlePriceFormat';
import { useCartStore } from '@/store/store';
import { computed } from '@vue/reactivity';

const store = useCartStore();
const products = computed(() => store.products);
const totalValue = computed(() => getTotalValue(store.products));
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
	margin-bottom: 0em;
}

.totalValue {
	font-size: 20px;
	margin: 1em 0 0.5em;
}

p a {
	color: var(--blue);
}

p a:hover {
	text-decoration: underline;
}

button {
	margin-bottom: 2em;
	border: none;
	background: transparent;
	cursor: pointer;
}

button:hover {
	text-decoration: underline;
}
</style>
