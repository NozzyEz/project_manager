<template lang="">
  <div class="projects">
    <div class="title-bar">
      <h3>Projects</h3>
    </div>
		<div class="container">
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  </div>
</template>
<script>
import ProjectItem from "./ProjectItem";
export default {
	name: "Projects",
	components: {
		ProjectItem
	}
};
</script>
<style lang="scss" scoped>
.projects {
	width: 100%;
	min-height: 30rem;
	.title-bar {
		display: flex;
		justify-content: space-between;
		button {
			border-radius: 0.6rem;
		}
	}
	.container {
		padding-top: 2rem;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
}
</style>