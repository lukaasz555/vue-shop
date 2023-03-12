<template>
	<form @submit.prevent="">
		<the-input
			label="Name"
			id="name"
			name="name"
			type="text"
			:value="state.formValues.name"
			@input="state.formValues.name = $event.target.value"
		></the-input>

		<the-input
			label="Email"
			id="email"
			name="email"
			type="email"
			:value="state.formValues.email"
			@input="state.formValues.email = $event.target.value"
		></the-input>

		<the-input
			label="Phone"
			id="phone"
			name="phone"
			type="phone"
			:value="state.formValues.phone"
			@input="state.formValues.phone = $event.target.value"
		></the-input>

		<the-textarea
			:value="state.formValues.message"
			label="Message"
			@input="state.formValues.message = $event.target.value"
		></the-textarea>
		<div>
			<the-button @click="printInfo">send</the-button>
		</div>
	</form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { ContactFormData } from '../../models/ContactFormData';
import TheInput from '../UI/TheInput.vue';
import TheTextarea from '../UI/TheTextarea.vue';

const state: ContactFormData = reactive({
	formValues: {
		name: '',
		email: '',
		phone: '',
		message: '',
	},
});

const printInfo = () => console.log(state.formValues);
</script>

<style scoped>
form {
	width: 80%;
	min-width: 300px;
	max-width: 500px;
	margin: 0 auto;
}

div {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 0.5em;
	width: 100%;
}
</style>
