// import axios from "axios";

const state = {
  //! Debug Data
  folders: [
    {
      type: "project-folder",
      id: "87b5ab39-80a9-4614-a760-56ce1aa43ef1",
      attributes: {
        name: "nozzy_folder_1",
        total_projects: 0,
        created_at: "2021-04-13T05:27:39.000000Z",
        updated_at: "2021-04-13T05:27:39.000000Z",
      },
      relationships: [],
    },
    {
      type: "project-folder",
      id: "3638b57a-50de-452e-be13-f61ba4c37667",
      attributes: {
        name: "nozzy folder 2",
        total_projects: 0,
        created_at: "2021-04-12T08:23:33.000000Z",
        updated_at: "2021-04-12T08:23:33.000000Z",
      },
      relationships: [],
    },
  ],
};

const getters = {
  allFolders: state => state.folders,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
