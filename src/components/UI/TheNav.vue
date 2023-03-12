<template>
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/albums">Albums</RouterLink>
		<RouterLink to="/contact">Contact</RouterLink>
		<RouterLink to="/cart">Cart{{ qty > 0 ? `: ${qty}` : null }}</RouterLink>
	</nav>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { store } from '@/store/store';
const qty = computed(() => store.getters.cartQty);
</script>

<style scoped>
a {
	color: #4c4c47;
}

a:not(:last-child) {
	margin: 0 0.75em;
}

a:hover {
	text-decoration: underline;
}
</style>
