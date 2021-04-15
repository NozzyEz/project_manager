<template>
	<div class="app-container">
		<h4>Folders:</h4>
		<div class="folder-container"></div>
		<h4>Projects:</h4>
		<div class="projects-container"></div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	components: {},
};
</script>

<style lang="scss">
.app-container {
	padding: 5rem;
	background-color: #233b40;
	min-height: 92vh;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
}
</style>
