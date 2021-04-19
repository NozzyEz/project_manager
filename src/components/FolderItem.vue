<template>
  <li>
    <div class="card" @click="showFolder(folder.id)">
      <div class="header">
        <img :src="folderIcon" alt="" />
        <div class="title">
          <h4>{{ folder.attributes.name }}</h4>
          <p>{{ folder.type }}</p>
        </div>
      </div>
      <div class="info">
        <div class="project-counter">
          <p><span>total projects</span></p>
          <p>{{ folder.attributes.total_projects }}</p>
        </div>
        <div class="updated">
          <p><span>Last updated at</span></p>
          <p>{{ getDate(folder.attributes.updated_at) }}</p>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import moment from "moment";
export default {
  name: "FolderItem",
  data() {
    return {
      folderIcon: require("../assets/folder-green.svg")
    };
  },
  props: {
    folder: Object
  },
  methods: {
    //* Helper function to format date time
    getDate(date) {
      return moment(date).format("DD-MM-YYYY HH:mm");
    },
    //* Emitter to Folder.vue with the ID, so we can show the folder view
    showFolder(id) {
      // console.log("show folder");
      this.$emit("show-folder", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 18rem;
  min-width: 35rem;
  flex: 1 1 30rem;
  margin: 2rem 3rem;
  padding: 2rem;
  cursor: pointer;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: end;
  }

  .info {
    /* min-height: 8rem; */
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .updated {
      text-align: end;
    }
  }
}
@media screen and (max-width: 600px) {
  .card {
    padding-bottom: 2rem;
    height: 15rem;
    min-width: 30rem;
  }
}
</style>