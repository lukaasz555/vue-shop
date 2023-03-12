<template>
	<the-message>
		<h1>/home</h1>
	</the-message>
</template>

<script setup lang="ts">
import { useCartStore } from '../../store/store';

const store = useCartStore();

console.log(store.itemsQty);
</script>
