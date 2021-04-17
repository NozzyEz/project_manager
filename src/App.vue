<template>
  <div class="app">
    <Nav />
    <FolderDetail
      @show-folder="showFolder()"
      v-if="folderDetailView"
      :folderID="activeFolder"
    />
    <router-view @show-folder="showFolder" />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import FolderDetail from "./components/FolderDetail";
import { mapActions } from "vuex";
export default {
  components: {
    Nav,
    FolderDetail
  },
  data() {
    return {
      folderDetailView: false,
      activeFolder: undefined
    };
  },
  methods: {
    ...mapActions(["fetchToken"]),
    showFolder(id) {
      this.activeFolder = id;
      this.folderDetailView = !this.folderDetailView;
    }
  },
  created() {
    this.fetchToken();
    console.log(localStorage.getItem("authToken"));
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-family: Helvetica, sans-serif;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 3.5rem;
}
h3 {
  font-size: 2.5rem;
}
h4 {
  font-size: 2rem;
}
p,
a {
  font-size: 1.6rem;
}
a {
  text-decoration: none;
}

button {
  background-color: rgb(0, 128, 113);
  color: white;
  padding: 1.5rem 2.5rem;
  border: none;
  border-radius: 1.5rem;
  transition: all 0.5s ease;
  &:focus {
    outline: none;
  }
  &:hover {
    color: rgb(0, 128, 113);
    background-color: white;
  }
}

span {
  font-weight: bold;
}

.card {
  background: rgba(255, 255, 255, 0.8);
  color: #233b40;
  height: 40rem;
  /* max-width: 40rem; */
  flex: 1 1 50rem;
  margin: 2rem 3rem;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
}
</style>
