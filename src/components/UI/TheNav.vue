<template>
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/albums">Albums</RouterLink>
		<RouterLink to="/contact">Contact</RouterLink>
		<RouterLink to="/cart">Cart{{ qty > 0 ? `: ${qty}` : null }}</RouterLink>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	computed: {
		qty() {
			return this.$store.getters.cartQty;
		},
	},
});
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
