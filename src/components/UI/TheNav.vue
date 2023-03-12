<template>
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/albums">Albums</RouterLink>
		<RouterLink to="/contact">Contact</RouterLink>
		<RouterLink to="/cart">Cart{{ qty > 0 ? `: ${qty}` : null }}</RouterLink>
	</nav>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/store';

const store = useCartStore();

const qty = store.itemsQty;
</script>

<style scoped>
a {
	color: var(--darkGray);
}

a:not(:last-child) {
	margin: 0 0.75em;
}

a:hover {
	text-decoration: underline;
}
</style>
