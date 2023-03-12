<template>
	<button>
		<slot></slot>
	</button>
</template>

<style scoped>
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
