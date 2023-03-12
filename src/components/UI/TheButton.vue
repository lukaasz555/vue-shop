<template>
	<button>
		<slot></slot>
	</button>
</template>

<style scoped>
button {
	background-color: transparent;
	border: 1px solid var(--black);
	padding: 0.75em 1.5em;
	font-size: 14px;
	text-transform: uppercase;
	cursor: pointer;
	background-color: var(--black);
	color: white;
	transition: color 0.2s, background-color 0.2s;
	margin-top: 1.5em;
}

button:hover {
	color: var(--black);
	background-color: transparent;
}
</style>
