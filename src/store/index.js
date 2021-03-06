import Vuex from "vuex";
import Vue from "vue";
import auth from "./modules/auth";
import projects from "./modules/projects";
import folders from "./modules/folders";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    projects,
    folders,
  },
});
