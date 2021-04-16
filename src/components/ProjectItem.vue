<template lang="">
  <div class="card">
    <div class="header">
      <h4>Some name</h4>
    </div>
		<div class="info"></div>
  </div>
</template>
<script>
export default {
	name: "ProjectItem",
};
</script>
<style lang="scss" scoped>
.card {
	background: rgba(255, 255, 255, 0.8);
	color: #000;
	height: 30rem;
	max-width: 29rem;
	flex: 1 1 30rem;
	margin: 2rem 3rem;
	padding: 2rem;
	border-radius: 2rem;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
}
</style>