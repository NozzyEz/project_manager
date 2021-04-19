<template>
  <div class="overlay">
    <div class="card folder" v-if="loaded">
      <div class="header">
        <h3>{{ getActiveFolder.attributes.name }}</h3>
        <button @click="closeFolder()"><i class="fas fa-times"></i></button>
      </div>
      <div class="info">
        <h4>Projects: {{ getActiveFolder.attributes.total_projects }}</h4>
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
  data() {
    return {
      loaded: false
    };
  },
  methods: {
    ...mapActions(["fetchSingleFolder"]),
    //* Emitter to App.vue to remove this component and all scrolling of main window
    closeFolder() {
      this.$emit("show-folder");
      document.body.style.overflow = "auto";
    },
    //* Helper function to format date time
    getDate(date) {
      return moment(date).format("DD-MM-YYYY HH:mm");
    }
  },
  computed: {
    ...mapGetters(["getActiveFolder", "getFolderProjects"])
  },
  async mounted() {
    // When view is mounted, load data and set loaded to true to allow rendering once ready
    await this.fetchSingleFolder(this.folderID);
    this.loaded = true;
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba($color: #000000, $alpha: 0.7);
  .card {
    .header {
      display: flex;
      justify-content: space-between;
      button {
        border: 1px solid white;

        &:hover {
          border: 1px solid rgb(0, 128, 113);
          /* font-size: 2rem; */
        }
      }
    }
    &.folder {
      max-width: 70%;
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
      grid-template-columns: repeat(auto-fit, minmax(35rem, 40rem));
      justify-content: center;
    }
  }
}

@media screen and (max-width: 600px) {
  .card {
    min-width: 95%;
  }
  .projects {
    /* justify-content: flex-start; */
  }
}
</style>