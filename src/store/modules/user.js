// import axios from "axios";

const state = {
  //! Debug Data
  user: {
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
      consents: {
        terms: true,
        marketing: false,
        ai: false,
      },
    },
    relationships: {
      accounts: [
        {
          id: "d54d6b7c-831a-49b8-9797-c229a09721f1",
          type: "account",
        },
      ],
    },
  },
  included: [
    {
      type: "account",
      id: "d54d6b7c-831a-49b8-9797-c229a09721f1",
      attributes: {
        company_name: "Developer Account",
        company_email: "developer+sbk@easytranslate.com",
        phone: null,
        team_identifier: "developer-account",
        is_parent: true,
        invoice_language: "en",
        receipt_email: "developer+sbk@easytranslate.com",
        alerts: {
          conversations: [],
        },
        subscription: {
          plan_identifier: null,
          plan_name: null,
          status: "active",
          started_at: null,
          ends_at: null,
          trial_ends_at: null,
          is_active: true,
        },
        created_at: "2020-10-28T13:00:42.000000Z",
        updated_at: "2020-10-28T13:00:43.000000Z",
        language_pairs: {
          translation: {
            en: {
              name: "English",
              code: "en",
              target_languages: [
                {
                  name: "Danish",
                  code: "da",
                },
              ],
            },
          },
          review: [],
        },
        project_workflows: {
          translation: {
            display_name: "Translation",
            identifier: "translation",
            is_available: true,
          },
          "translation+review": {
            display_name: "Translation + Review",
            identifier: "translation+review",
            is_available: true,
          },
          "self+machine_translation": {
            display_name: "Translate Yourself + MT",
            identifier: "self+machine_translation",
            is_available: true,
          },
        },
      },
      relationships: [],
    },
  ],
  meta: {
    copyright: "Copyright 2021 EasyTranslate A/S",
    environment: "sandbox",
  },
};

const getters = {};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
