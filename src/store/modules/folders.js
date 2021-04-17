import axios from "axios";

const state = {
  folders: [],
  activeFolder: {},
  folderProjects: [],
};

const getters = {
  allFolders: state => state.folders,
  getActiveFolder: state => state.activeFolder,
  getFolderProjects: state => state.folderProjects,
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
      commit("setActiveFolder", response.data);
    } catch (err) {
      console.log(err);
    }
  },
};

const mutations = {
  setFolders: (state, folders) => {
    state.folders = folders;
  },
  setActiveFolder: (state, data) => {
    state.activeFolder = data.data;
    state.folderProjects = data.included;
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
