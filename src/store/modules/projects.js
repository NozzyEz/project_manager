import axios from "axios";

const state = {
	//! Debug data
	projects: [
		{
			type: "project",
			id: "ee4c12b2-5c1e-4e7e-b14f-fd75f683cfff",
			attributes: {
				name: "EasyProject from EasyTranslate Dashboard #6",
				identifier: "DEVELOPERACCOUNT-P00014",
				customer_id: "fbe0d926-63ec-40ca-9ccd-8b4feb58b54f",
				source_language: "en",
				source_content:
					"https://api.platform.sandbox.easytranslate.com/api/v1/teams/developer-account/projects/ee4c12b2-5c1e-4e7e-b14f-fd75f683cfff/download",
				file_name: "test-doc.json",
				target_languages: ["da"],
				workflow: "translation",
				agent: "EasyTranslate Dashboard",
				price: {
					amount: 351499,
					amount_euro: 47200,
					total: 351499,
					total_euro: 47200,
					currency: "DKK",
				},
				payment: {
					date: null,
					method: null,
					amount: 351499,
					currency: "DKK",
					vat_percent: 0.25,
					gross_amount: 439374,
					invoice_url: null,
					hosted_invoice_url: null,
				},
				status: "COMPLETED",
				folder_id: null,
				folder_name: null,
				callback_url: null,
				customer: {
					type: "customer",
					id: "fbe0d926-63ec-40ca-9ccd-8b4feb58b54f",
					attributes: {
						email: "developer+sbk@easytranslate.com",
						first_name: "Developer",
						last_name: "Account",
						phone: "+45123123123",
						timezone: "Europe/Copenhagen",
						avatar: null,
						created_at: "2020-10-28T13:00:43.000000Z",
						updated_at: "2020-10-28T13:00:43.000000Z",
					},
					relationships: [],
				},
				progress: {
					percent: 1,
					completed_tasks: 1,
				},
				preferred_deadline: null,
				target_zip_timestamp: null,
				target_zip_path: null,
				created_at: "2020-11-10T08:29:53.000000Z",
				updated_at: "2020-11-10T08:30:50.000000Z",
			},
			relationships: [],
		},
		{
			type: "project",
			id: "7d90e7bf-4837-48de-ab2f-389676b0695c",
			attributes: {
				name: "Test project",
				identifier: "DEVELOPERACCOUNT-P00013",
				customer_id: "fbe0d926-63ec-40ca-9ccd-8b4feb58b54f",
				source_language: "en",
				source_content:
					"https://api.platform.sandbox.easytranslate.com/api/v1/teams/developer-account/projects/7d90e7bf-4837-48de-ab2f-389676b0695c/download",
				file_name: "test-doc - Copie.json",
				target_languages: ["da"],
				workflow: "translation",
				agent: "EasyTranslate Dashboard",
				price: {
					amount: 351462,
					amount_euro: 47200,
					total: 351462,
					total_euro: 47200,
					currency: "DKK",
				},
				payment: {
					date: null,
					method: null,
					amount: 351462,
					currency: "DKK",
					vat_percent: 0.25,
					gross_amount: 439328,
					invoice_url: null,
					hosted_invoice_url: null,
				},
				status: "COMPLETED",
				folder_id: "43b7dd46-fd77-4007-99c3-eddf7bcd58ce",
				folder_name: "la",
				callback_url: null,
				customer: {
					type: "customer",
					id: "fbe0d926-63ec-40ca-9ccd-8b4feb58b54f",
					attributes: {
						email: "developer+sbk@easytranslate.com",
						first_name: "Developer",
						last_name: "Account",
						phone: "+45123123123",
						timezone: "Europe/Copenhagen",
						avatar: null,
						created_at: "2020-10-28T13:00:43.000000Z",
						updated_at: "2020-10-28T13:00:43.000000Z",
					},
					relationships: [],
				},
				progress: {
					percent: 1,
					completed_tasks: 1,
				},
				preferred_deadline: null,
				target_zip_timestamp: null,
				target_zip_path: null,
				created_at: "2020-11-05T07:52:24.000000Z",
				updated_at: "2020-11-05T07:55:43.000000Z",
			},
			relationships: [],
		},
		{
			type: "project",
			id: "867a650e-2ef0-4341-95e8-3ef52f8e27a9",
			attributes: {
				name: "EasyProject from EasyTranslate Dashboard #5",
				identifier: "DEVELOPERACCOUNT-P00012",
				customer_id: "fbe0d926-63ec-40ca-9ccd-8b4feb58b54f",
				source_language: "en",
				source_content:
					"https://api.platform.sandbox.easytranslate.com/api/v1/teams/developer-account/projects/867a650e-2ef0-4341-95e8-3ef52f8e27a9/download",
				file_name: "test-doc.json",
				target_languages: ["da"],
				workflow: "translation",
				agent: "EasyTranslate Dashboard",
				price: {
					amount: 351521,
					amount_euro: 47200,
					total: 351521,
					total_euro: 47200,
					currency: "DKK",
				},
				payment: {
					date: null,
					method: null,
					amount: 351521,
					currency: "DKK",
					vat_percent: 0.25,
					gross_amount: 439401,
					invoice_url: null,
					hosted_invoice_url: null,
				},
				status: "COMPLETED",
				folder_id: "27f68614-9537-4ae4-a9cd-0a2920bde11a",
				folder_name: "Web Dev-content",
				callback_url: null,
				customer: {
					type: "customer",
					id: "fbe0d926-63ec-40ca-9ccd-8b4feb58b54f",
					attributes: {
						email: "developer+sbk@easytranslate.com",
						first_name: "Developer",
						last_name: "Account",
						phone: "+45123123123",
						timezone: "Europe/Copenhagen",
						avatar: null,
						created_at: "2020-10-28T13:00:43.000000Z",
						updated_at: "2020-10-28T13:00:43.000000Z",
					},
					relationships: [],
				},
				progress: {
					percent: 1,
					completed_tasks: 1,
				},
				preferred_deadline: null,
				target_zip_timestamp: null,
				target_zip_path: null,
				created_at: "2020-10-29T08:29:45.000000Z",
				updated_at: "2020-10-29T08:30:43.000000Z",
			},
			relationships: [],
		},
	],
};

const getters = {
	allProjects: state => state.projects,
};

const actions = {
	async fetchProjects({commit, rootGetters}) {
		console.log(rootGetters.getpProjectsURL);
		try {
			const response = await axios.get(rootGetters.getpProjectsURL, {
				headers: {
					Authorization: "Bearer " + rootGetters.getAccessToken,
				},
			});
			console.log(response.data.data);
			commit("setProjects", response.data.data);
		} catch (err) {
			console.log(err);
		}
	},
};

const mutations = {
	setProjects: (state, projects) => {
		state.projects = projects;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
