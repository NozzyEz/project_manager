<template>
  <div class="overlay" @click="closeDialogue()">
    <div class="card dialogue"></div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";
// import ProjectItem from "./ProjectItem";
// import moment from "moment";
export default {
  name: "CreateNewFolder",
  methods: {
    closeDialogue() {
      this.$emit("toggle-create-new");
      document.body.style.overflow = "auto";
    }
    // getDate(date) {
    //   return moment(date).format("DD-MM-YYYY HH:mm");
    // }
  }
  // computed: {
  //   ...mapGetters(["getActiveFolder", "getFolderProjects"])
  // },
  // mounted() {
  //   this.fetchSingleFolder(this.folderID);
  // }
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
    &.dialogue {
      max-width: 50%;
      height: 50%;
      overflow-y: scroll;
      background: rgba(255, 255, 255, 0.95);
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