<template >
  <div class="folders">
    <div class="title-bar">
      <h3>Folders</h3>
      <button @click="toggleCreate()">Create new</button>
    </div>
    <ul id="folder-container" class="container">
      <FolderItem
        v-for="folder in allFolders"
        :key="folder.id"
        :folder="folder"
        @show-folder="$emit('show-folder', folder.id)"
      />
    </ul>
    <div class="scroll-btns">
      <button @click="scrubFolders('neg')">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button @click="scrubFolders('pos')">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
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
    ...mapActions(["fetchFolders"]),
    //* Function that allows up to use buttons for scrolling on the folder view instead of using trackpad
    scrubFolders(direction) {
      const folders = document.getElementById("folder-container");
      if (direction === "pos")
        folders.scrollBy({ top: 0, left: 1230, behavior: "smooth" });
      if (direction === "neg")
        folders.scrollBy({ top: 0, left: -1230, behavior: "smooth" });
    },
    // * Emitter to App.vue to toggle the CreateNewFolder component
    toggleCreate() {
      this.$emit("toggle-create-new");
    }
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
  /* width: 100%; */
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
    /* grid-auto-columns: calc(25% -3rem); */
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
  .scroll-btns {
    display: flex;
    justify-content: flex-end;
    button {
      background-color: transparent;

      margin: 0rem 0.5rem;

      border-radius: 0;
      padding: 1rem;
    }
  }
}

@media screen and (max-width: 600px) {
  .container {
    /* grid-auto-columns: calc(80%); */
  }
  .title-bar {
    margin: 1rem;
  }
  .scroll-btns {
    display: none !important;
  }
}
</style>