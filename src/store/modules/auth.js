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
	userEmail: "developer+sbk@easytranslate.com",
	password: "easytranslate2020",

	accessToken: "",
};

const getters = {
	getFoldersURL: state => `${state.baseURL}${state.userName}${state.foldersURL}`,
	getpProjectsURL: state => `${state.baseURL}${state.userName}${state.projectsURL}`,
	getUserURL: state => `${state.baseURL}${state.userURL}`,
	getAccessToken: state => state.accessToken,
};

const actions = {
	async fetchToken({commit, state}) {
		if (localStorage.getItem("authToken")) {
			commit("setAccessToken", localStorage.getItem("authToken"));
		} else {
			try {
				const response = await axios.post(`${state.authURL}`, {
					client_id: state.clientID,
					client_secret: state.clientSecret,
					grant_type: "password",
					username: state.userEmail,
					password: state.password,
				});

				commit("setAccessToken", response.data.access_token);
			} catch (err) {
				console.log(err);
			}
		}
	},
};

const mutations = {
	setAccessToken: (state, token) => {
		state.accessToken = token;
		localStorage.setItem("authToken", token);
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
