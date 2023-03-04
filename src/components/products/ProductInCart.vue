<template>
	<li>
		<p>{{ title }}</p>
		<p>{{ String(price.toFixed(2).replace('.', ',')) }}zł</p>
	</li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: ['id', 'title', 'price'],
});
</script>

<style scoped>
li {
	display: flex;
	justify-content: space-between;
	width: 280px;
	margin-bottom: 0.5em;
}
</style>
