<template>
  <div class="app-container">
    <Folders />
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
  }
};
</script>

<style lang="scss">
.app-container {
  padding: 5rem;
  background: linear-gradient(150deg, #233b40, #47767f);
  min-height: 92vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
