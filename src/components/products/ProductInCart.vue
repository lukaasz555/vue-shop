<template>
	<li>
		<RouterLink :to="'/albums/' + id">
			<p>{{ title }}</p>
		</RouterLink>
		<div>
			<p>{{ String(price.toFixed(2).replace('.', ',')) }}zł</p>
			<button @click="store.removeFromCart(id)">
				<FontAwesomeIcon :icon="faTrash" />
			</button>
		</div>
	</li>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCartStore } from '@/store/store';

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});
const { id, title, price } = toRefs(props);

const store = useCartStore();
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

div {
	display: flex;
}

button {
	background-color: transparent;
	padding: 0 0.25em;
	border: none;
	cursor: pointer;
	margin-left: 0.5em;
}
</style>
