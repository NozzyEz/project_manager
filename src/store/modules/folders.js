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
  //* fetch all available folders once logged in
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
    } catch (error) {
      if (error.response) console.log(error.response);
      if (error.request) console.log(error.request);
      if (error.message) console.log("Error", error.message);
    }
  },
  //* fetch a single folder when a folder is clicked on in the UI
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
    } catch (error) {
      if (error.response) console.log(error.response);
      if (error.request) console.log(error.request);
      if (error.message) console.log("Error", error.message);
    }
  },
  //* Add a new folder to the server and add the response to state so it's reflected in the UI
  async addNewFolder({commit, rootGetters}, payload) {
    console.log(payload);
    try {
      const response = await axios.post(
        rootGetters.getFoldersURL,
        {
          data: {
            type: "project-folder",
            attributes: {
              name: payload,
            },
          },
        },
        {
          headers: {
            Authorization: "Bearer " + rootGetters.getAccessToken,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      commit("addNewFolder", response.data.data);
    } catch (error) {
      if (error.response) console.log(error.response);
      if (error.request) console.log(error.request);
      if (error.message) console.log("Error", error.message);
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
    console.log(folder);
    state.folders.unshift(folder);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
