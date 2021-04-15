<template lang="">
<header>
  <h1>EasyTranslate Project Manager</h1>
  <div class="nav">
    <h3>My Workspace</h3>
    <button>+ Create New Project</button>
  </div>
</header>
</template>
<script>
export default {};
</script>
<style lang="scss">
header {
	/* background-color: rgb(49, 49, 49); */
	min-height: 8vh;
	border-bottom: 1px solid grey;
	box-shadow: 0px 0px 10px #000;

	.nav {
		margin: 1rem 5rem;
		display: flex;
		justify-content: space-between;
	}
}
</style>