<template>
	<form @submit.prevent="">
		<div>
			<label for="name">Name:</label>
			<input type="text" name="name" id="name" v-model="formValues.name" />
		</div>

		<div>
			<label for="email">Email:</label>
			<input type="email" name="email" id="email" v-model="formValues.email" />
		</div>

		<div>
			<label for="phone">Phone:</label>
			<input type="phone" name="phone" id="phone" v-model="formValues.phone" />
		</div>

		<div>
			<label>Message:</label>
			<textarea rows="6" v-model="formValues.message" />
		</div>
		<div>
			<the-button @click="printInfo">send</the-button>
		</div>
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	data() {
		return {
			formValues: {
				name: '',
				email: '',
				phone: '',
				message: '',
			},
		};
	},
	methods: {
		printInfo() {
			console.log(this.formValues);
		},
	},
});
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

textarea {
	padding: 0.5em;
	font-family: inherit;
	background-color: transparent;
	border: 1px solid #4c4c47;
	outline-color: #2e2e2e;
	width: 100%;
	resize: vertical;
	font-size: 16px;
}
</style>
