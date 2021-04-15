<template>
	<div class="app">
		<Nav />
		<router-view />
	</div>
</template>

<script>
import Nav from "./components/Nav";
export default {
	components: {
		Nav,
	},
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html {
	font-size: 62.5%;
}
body {
	font-family: Helvetica, sans-serif;
}
h1 {
	font-size: 3rem;
}
h2 {
	font-size: 3.5rem;
}
h3 {
	font-size: 2.5rem;
}
h4 {
	font-size: 2rem;
}
p,
a {
	font-size: 1.6rem;
}
a {
	text-decoration: none;
}

button {
	background-color: rgb(0, 128, 113);
	color: white;
	padding: 1.5rem 2.5rem;
	border: none;
	border-radius: 1.5rem;
}
</style>
