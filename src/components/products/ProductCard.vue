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

<script setup lang="ts">
import { defineProps, toRefs } from 'vue';

const props = defineProps({
	authors: {
		type: Array,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	discount: {
		type: Number,
		required: true,
	},
	id: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
});

const { price, img, id, title, authors } = toRefs(props);
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
	color: var(--black);
	font-weight: 500;
	text-align: center;
}

h4 {
	color: var(--darkGray);
	opacity: 0.85;
}

section:last-child {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 1em;
}

.unavailable {
	color: var(--darkGray);
	opacity: 0.75;
}
</style>
