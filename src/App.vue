<template>
  <div class="app">
    <Nav @sign-out="logUserOut()" />
    <SignIn v-if="!isLoggedIn" @sign-in="logUserIn" />
    <FolderDetail
      @show-folder="showFolder()"
      v-if="folderDetailView"
      :folderID="activeFolder"
    />
    <CreateNewFolder @toggle-create-new="toggleCreate" v-if="showCreateNew" />
    <Home
      @show-folder="showFolder"
      @toggle-create-new="toggleCreate"
      v-if="isLoggedIn"
    />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import FolderDetail from "./components/FolderDetail";
import CreateNewFolder from "./components/CreateNewFolder";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import { mapActions } from "vuex";
export default {
  components: {
    Nav,
    Home,
    FolderDetail,
    CreateNewFolder,
    SignIn
  },
  data() {
    return {
      showCreateNew: false,
      folderDetailView: false,
      activeFolder: undefined,
      isLoggedIn: false
    };
  },
  methods: {
    ...mapActions(["authenticateUser", "refreshUser", "clearToken"]),
    //* show FolderDetail component when triggered
    showFolder(id) {
      this.activeFolder = id;
      this.folderDetailView = !this.folderDetailView;
      if (this.folderDetailView) document.body.style.overflow = "hidden";
    },
    //* show CreateNewFolder component when triggered
    toggleCreate() {
      // console.log("toggle create called");
      this.showCreateNew = !this.showCreateNew;
      if (this.showCreateNew) document.body.style.overflow = "hidden";
    },
    //* Log user out
    logUserOut() {
      // console.log("logging user out");
      this.clearToken();
      this.isLoggedIn = false;
    },
    //* Log user in
    async logUserIn(userEmail, password) {
      // console.log("logging user in");
      const payload = { userEmail, password };
      await this.authenticateUser(payload);
      if (localStorage.getItem("authToken")) this.isLoggedIn = true;
    }
  },
  created() {
    this.refreshUser();
    if (localStorage.getItem("authToken")) this.isLoggedIn = true;
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
  background: #18292c;
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
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    color: rgb(0, 128, 113);
    background-color: #e5f5f8;
  }
}

span {
  font-weight: bold;
}

.card {
  background: rgba(255, 255, 255, 0.8);
  color: #233b40;
  height: 40rem;
  flex: 1 1 50rem;
  margin: 2rem 3rem;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
}

@media screen and (max-width: 600px) {
  html {
    font-size: 50%;
  }
  .card {
    margin: 2rem 0rem;
  }
}
</style>
