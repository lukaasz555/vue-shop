<template>
	<li>
		<RouterLink :to="'/albums/' + id">
			<p>{{ title }}</p>
		</RouterLink>
		<p>{{ String(price.toFixed(2).replace('.', ',')) }}zł</p>
	</li>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue';

const props = defineProps(['id', 'title', 'price']);
const { id, title, price } = toRefs(props);
</script>

<style scoped>
li {
	display: flex;
	justify-content: space-between;
	width: 280px;
	margin-bottom: 0.5em;
}

a {
	color: var(--black);
}
</style>
