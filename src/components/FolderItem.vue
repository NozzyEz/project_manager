<template lang="">
  <div class="folder-card">
    <div class="header">
      <h4>Some name</h4>
    </div>
		<div class="info"></div>
  </div>
</template>
<script>
export default {
	name: "FolderItem",
};
</script>
<style lang="scss" scoped>
.folder-card {
	background: white;
	color: #000;
	height: 30rem;
	max-width: 30rem;
	flex: 1 1 35rem;
	margin: 2rem 3rem;
	padding: 2rem;
	border-radius: 2rem;
	box-shadow: 0px 0px 15px #000;
}
</style>