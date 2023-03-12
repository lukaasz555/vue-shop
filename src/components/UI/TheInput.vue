<template>
	<div>
		<label :for="id">{{ label }}:</label>
		<input :type="type" :value="value" :name="name" :id="id" />
		<p>{{ state.message }}</p>
	</div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, watch, reactive } from 'vue';

const state = reactive({
	message: '',
});

const props = defineProps(['label', 'type', 'value', 'name', 'id']);
const { type, value, name, id, label } = toRefs(props);

watch(
	() => props.value,
	// eslint-disable-next-line no-unused-vars
	(oldValue, newValue) => {
		props.value.trim() === ''
			? (state.message = 'Required field')
			: (state.message = '');
		if (props.type === 'email') {
			props.value.indexOf('@') > 0
				? (state.message = '')
				: (state.message = 'Email address must contain the "@" symbol');
		}
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

input {
	padding: 0.5em;
	font-family: inherit;
	background-color: transparent;
	border: 1px solid #4c4c47;
	outline-color: #2e2e2e;
	width: 100%;
	font-size: 16px;
	margin-bottom: 0.75em;
}

p {
	text-align: left;
	width: 100%;
	color: rgb(255, 70, 70);
}
</style>
