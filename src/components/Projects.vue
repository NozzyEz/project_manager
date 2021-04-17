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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30rem;
  .title-bar {
    align-self: flex-start;
  }
  .container {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>