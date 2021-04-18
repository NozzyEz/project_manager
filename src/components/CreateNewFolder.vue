<template>
  <div class="overlay" @click="closeDialogue()">
    <div class="card dialogue">
      <h3>Create new folder</h3>
      <form>
        <input type="text" placeholder="Folder name" />
        <button>Submit</button>
      </form>
    </div>
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
    // TODO Create folder on server and reflect in UI
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
      padding: 10rem;
      max-width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 40%;
      overflow-y: scroll;
      background: rgba(255, 255, 255, 0.9);
      h3 {
        align-self: start;
      }
      form {
        display: flex;
        flex-direction: column;
        width: 100%;
        input {
          margin: 2rem 0rem;
          font-size: 2.4rem;
        }
      }
    }
  }
}
</style>