<template>
  <div class="overlay" @click="closeFolder()">
    <div class="card">
      <h3>{{ getActiveFolder.attributes.name }}</h3>
      <h4>{{ folderID }}</h4>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FolderDetail",
  props: {
    folderID: String
  },
  methods: {
    ...mapActions(["fetchSingleFolder"]),
    closeFolder() {
      this.$emit("show-folder");
      document.body.style.overflow = "auto";
    }
  },
  computed: mapGetters(["getActiveFolder"]),
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
}
</style>