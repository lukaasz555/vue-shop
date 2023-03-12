<template>
	<div>
		<label>{{ label }}:</label>
		<textarea rows="6" :value="value" />
		<p>{{ state.message }}</p>
	</div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, watch, reactive } from 'vue';
const state = reactive({
	message: '',
});
const props = defineProps(['label', 'value']);
const { label, value } = toRefs(props);

watch(
	() => props.value,
	// eslint-disable-next-line no-unused-vars
	(oldVal, newVal) => {
		props.value.trim() === '' ? (state.message = 'Required field') : '';
	}
);
</script>

<style scoped>
div {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 0.5em;
	width: 100%;
}

label {
	width: 100%;
	font-size: 18px;
	margin-bottom: 0.25em;
}

textarea {
	padding: 0.5em;
	font-family: inherit;
	background-color: transparent;
	border: 1px solid var(--darkGray);
	outline-color: var(--black);
	width: 100%;
	resize: vertical;
	font-size: 16px;
	margin-bottom: 0.75em;
}

p {
	text-align: left;
	width: 100%;
	color: var(--red);
}
</style>
