<template>
	<header>
		<h1>Vue test</h1>
		<the-nav></the-nav>
	</header>
</template>

<script setup lang="ts">
import TheNav from './TheNav.vue';
</script>

<style scoped>
header {
	width: 100%;
	padding: 1em 2em;
	box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 3em;
}
</style>
