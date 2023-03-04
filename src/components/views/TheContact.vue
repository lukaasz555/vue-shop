<template>
	<h1>Contact with us</h1>
	<contact-form></contact-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from '../Forms/ContactForm.vue';

export default defineComponent({
	components: {
		ContactForm,
	},
});
</script>

<style scoped>
h1 {
	text-align: center;
	margin-bottom: 1em;
}
</style>
