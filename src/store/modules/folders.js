import axios from "axios";

const state = {
	folders: [],
	activeFolder: {},
};

const getters = {
	allFolders: state => state.folders,
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
};

const mutations = {
	setFolders: (state, folders) => {
		state.folders = folders;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
