<template>
	<main>
		<slot></slot>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style scoped>
main {
	width: 100%;
	height: 60vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
