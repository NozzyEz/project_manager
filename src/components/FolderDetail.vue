<template>
  <div class="overlay" @click="closeFolder()">
    <div class="card folder">
      <div class="header">
        <h3>{{ getActiveFolder.attributes.name }}</h3>
        <h4>{{ folderID }}</h4>
        <h4>Projects: {{ getActiveFolder.attributes.total_projects }}</h4>
      </div>
      <div class="info">
        <p><span>Created at:</span></p>
        <p>{{ getDate(getActiveFolder.attributes.created_at) }}</p>
        <p><span>updated at:</span></p>
        <p>{{ getDate(getActiveFolder.attributes.updated_at) }}</p>
      </div>
      <div class="projects-container">
        <h4>Projects</h4>
        <div class="projects">
          <ProjectItem
            v-for="project in getFolderProjects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProjectItem from "./ProjectItem";
import moment from "moment";
export default {
  name: "FolderDetail",
  components: {
    ProjectItem
  },
  props: {
    folderID: String
  },
  methods: {
    ...mapActions(["fetchSingleFolder"]),
    closeFolder() {
      this.$emit("show-folder");
      document.body.style.overflow = "auto";
    },
    getDate(date) {
      return moment(date).format("DD-MM-YYYY HH:mm");
    }
  },
  computed: {
    ...mapGetters(["getActiveFolder", "getFolderProjects"])
  },
  mounted() {
    this.fetchSingleFolder(this.folderID);
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba($color: #000000, $alpha: 0.7);
  .card {
    &.folder {
      max-width: 80%;
      height: 95%;
      overflow-y: scroll;
      background: rgba(255, 255, 255, 0.95);
      /* display: flex;
      flex-direction: column; */
    }
    .projects-container {
      margin-top: 2.5rem;
    }
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fill, 42rem);
      justify-content: space-between;
    }
  }
}
</style>