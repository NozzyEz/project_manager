import Vuex from 'vuex';
import Vue from 'vue';
import user from './modules/user';
import projects from './modules/projects';
import folders from './modules/folders';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    projects,
    folders,
  },
});
