<template>
  <div class="app-container">
    <Folders @show-folder="showFolder" @toggle-create-new="toggleCreate()" />
    <Projects />
  </div>
</template>

<script>
import Projects from "../components/Projects";
import Folders from "../components/Folders";
export default {
  name: "Home",
  components: {
    Projects,
    Folders
  },
  methods: {
    showFolder(id) {
      this.$emit("show-folder", id);
    },
    toggleCreate() {
      this.$emit("toggle-create-new");
    }
  }
};
</script>

<style lang="scss">
.app-container {
  padding: 5rem;
  background: linear-gradient(150deg, #18292c, #47767f);
  min-height: 92vh;
  color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  /* align-items: flex-start; */
}
</style>
