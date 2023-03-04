<template>
	<header>
		<h1>{{ pageTitle }}</h1>
		<the-nav></the-nav>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNav from './TheNav.vue';

export default defineComponent({
	data() {
		return {
			pageTitle: 'Test Shop Vue + ts',
		};
	},
	components: { TheNav },
});
</script>

<style scoped>
header {
	width: 100%;
	padding: 1em 2em;
	box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
