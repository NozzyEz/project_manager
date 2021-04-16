<template>
	<div class="projects">
		<div class="title-bar">
			<h3>Projects</h3>
		</div>
		<div class="container">
			<ProjectItem
				v-for="project in allProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ProjectItem from "./ProjectItem";
export default {
	name: "Projects",
	components: {
		ProjectItem
	},
	methods: { ...mapActions(["fetchProjects"]) },
	computed: mapGetters(["allProjects"]),
	created() {
		this.fetchProjects();
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
		justify-content: space-evenly;
		align-items: flex-start;
		flex-wrap: wrap;
	}
}
</style>