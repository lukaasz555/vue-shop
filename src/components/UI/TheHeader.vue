<template>
	<header>
		<nav></nav>
		<h1>{{ pageTitle }}</h1>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return {
			pageTitle: 'Test Shop Vue + ts',
		};
	},
});
</script>

<style scoped>
header {
	width: 100%;
	padding: 1em 0;
	box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
