<template>
	<div class="card__wrapper">
		<section>
			<RouterLink :to="'/albums/' + id">
				<img :src="img" :alt="title" />
			</RouterLink>
		</section>
		<section>
			<h3>
				<RouterLink :to="'/albums/' + id">
					{{ title }}
				</RouterLink>
			</h3>
			<h4>{{ authors.join(', ') }}</h4>

			<p :class="{ unavailable: price < 1 }">
				{{
					price > 0
						? `${String(price.toFixed(2)).replace('.', ',')} zł`
						: 'unavailable'
				}}
			</p>
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
	padding: 2em 1em;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	width: 300px;
	border-radius: 8px;
	position: relative;
}

.card__wrapper::before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border-radius: 8px;
	box-shadow: 4px 8px 20px rgba(0, 0, 0, 1);
	opacity: 0.05;
	transition: opacity 0.4s;
	z-index: -10;
}

.card__wrapper:hover::before {
	opacity: 0.2;
}

img {
	height: 180px;
	width: 180px;
	border-radius: 4px;
}

h3,
h3 a,
h4 {
	color: #2e2e2e;
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

.unavailable {
	color: #4c4c47;
	opacity: 0.75;
}
</style>
