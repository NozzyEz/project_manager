import axios from "axios";

const state = {
  folders: [],
  activeFolder: {},
};

const getters = {
  allFolders: state => state.folders,
  getActiveFolder: state => state.activeFolder,
};

const actions = {
  async fetchFolders({commit, rootGetters}) {
    // console.log(localStorage.getItem("authToken"));
    try {
      const response = await axios.get(rootGetters.getFoldersURL, {
        headers: {
          Authorization: "Bearer " + rootGetters.getAccessToken,
        },
      });
      // console.log(response.data.data);
      commit("setFolders", response.data.data);
    } catch (err) {
      console.log(err);
    }
  },
  async fetchSingleFolder({commit, rootGetters}, id) {
    // console.log(localStorage.getItem("authToken"));
    try {
      const response = await axios.get(`${rootGetters.getFoldersURL}/${id}`, {
        headers: {
          Authorization: "Bearer " + rootGetters.getAccessToken,
        },
      });
      // console.log(response.data.data);
      commit("setActiveFolder", response.data.data);
    } catch (err) {
      console.log(err);
    }
  },
};

const mutations = {
  setFolders: (state, folders) => {
    state.folders = folders;
  },
  setActiveFolder: (state, folder) => {
    state.activeFolder = folder;
  },

  addNewFolder: (state, folder) => {
    state.folders.unshift(folder);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
