<template >
  <div class="folders">
    <div class="title-bar">
      <h3>Folders</h3>
      <button>Create new</button>
    </div>
    <ul class="container">
      <FolderItem
        v-for="folder in allFolders"
        :key="folder.id"
        :folder="folder"
        @show-folder="$emit('show-folder', folder.id)"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FolderItem from "./FolderItem";
export default {
  name: "Folders",
  components: {
    FolderItem
  },
  methods: {
    ...mapActions(["fetchFolders"])
  },
  computed: mapGetters(["allFolders"]),
  created() {
    this.fetchFolders();
  }
};
</script>

<style lang="scss" scoped>
.folders {
  overflow-x: hidden;
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
    list-style: none;
    padding-top: 2rem;
    display: grid;
    /* grid-gap: 0.5rem; */
    grid-auto-flow: column;
    grid-auto-columns: calc(25% -3rem);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
}
</style>