import axios from "axios";

const state = {
  baseURL: "https://api.platform.sandbox.easytranslate.com/api/v1/teams/",
  authURL: "https://api.platform.sandbox.easytranslate.com/oauth/token",
  foldersURL: "/folders",
  projectsURL: "/projects?filt ers[is_workspace]=true",
  userURL: "/user",
  clientID: "bfd59cd6-001c-410b-98a6-9dc5436fbb22",
  clientSecret: "mLKI6WyRJ7pKOeq7jzxvt5Ad8UBkeY2ofpJzxIwA",
  userName: "developer-account",
  accessToken: "",
};

const getters = {
  getFoldersURL: state => `${state.baseURL}${state.userName}${state.foldersURL}`,
  getpProjectsURL: state => `${state.baseURL}${state.userName}${state.projectsURL}`,
  getUserURL: state => `${state.baseURL}${state.userURL}`,
  getAccessToken: state => state.accessToken,
};

const actions = {
  async authenticateUser({commit, state}, payload) {
    console.log(payload);
    if (localStorage.getItem("authToken")) {
      commit("setAccessToken", localStorage.getItem("authToken"));
    } else {
      try {
        const response = await axios.post(`${state.authURL}`, {
          client_id: state.clientID,
          client_secret: state.clientSecret,
          grant_type: "password",
          username: payload.userEmail,
          password: payload.password,
        });

        commit("setAccessToken", response.data.access_token);
      } catch (error) {
        if (error.response) console.log(error.response);
        if (error.request) console.log(error.request);
        if (error.message) console.log("Error", error.message);
      }
    }
  },
  refreshUser({commit}) {
    if (localStorage.getItem("authToken")) {
      commit("setAccessToken", localStorage.getItem("authToken"));
    }
  },
  clearToken({commit}) {
    commit("clearAccessToken");
  },
};

const mutations = {
  setAccessToken: (state, token) => {
    state.accessToken = token;
    localStorage.setItem("authToken", token);
  },
  clearAccessToken: state => {
    (state.accessToken = ""), localStorage.clear();
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
