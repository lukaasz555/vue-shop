<template>
	<div class="card__wrapper">
		<section>
			<img :src="img" :alt="title" />
		</section>
		<section>
			<h3>{{ title }}</h3>
			<h4>{{ authors.join(', ') }}</h4>
			<p>{{ String(price).replace('.', ',') }} zł</p>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: ['authors', 'title', 'price', 'discount', 'img', 'id'],
});
</script>

<style scoped>
.card__wrapper {
	display: flex;
	margin: 1em;
	box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.05);
	padding: 1em;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	width: 300px;
	border-radius: 8px;
}

img {
	height: 180px;
	width: 180px;
}

h3,
h4 {
	font-weight: 500;
	text-align: center;
}

h4 {
	color: #4c4c47;
	opacity: 0.85;
}

section:last-child {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 1em;
}

button {
	background-color: transparent;
	border: 1px solid #2e2e2e;
	padding: 0.75em 1.5em;
	font-size: 14px;
	text-transform: uppercase;
	cursor: pointer;
	background-color: #2e2e2e;
	color: white;
	transition: color 0.2s, background-color 0.2s;
	margin-top: 1.5em;
}

button:hover {
	color: #2e2e2e;
	background-color: transparent;
}
</style>
