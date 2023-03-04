<template>
	<the-header></the-header>
	<RouterView></RouterView>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from './components/UI/TheHeader.vue';

export default defineComponent({
	components: {
		TheHeader,
	},
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;800&display=swap');

body {
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
	color: #2d2d2a;
	min-height: 100vh;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

a {
	text-decoration: none;
}
</style>
