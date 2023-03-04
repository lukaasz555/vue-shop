<template>
	<h1>{{ $route.params.id }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	mounted() {
		console.log(this.$route.params);
	},
});
</script>
