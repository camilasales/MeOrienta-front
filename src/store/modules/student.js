// import { axios } from "@/helpers/http";

// const baseURL = "";

const state = {
  students: [],
  firstForm: {},
  secondForm: {},
};

const getters = {
  dataStudent: (state) => state.students,
};

// atribuir um valor, realizar alteração
const mutations = {
  setdataStudent(state, data) {
    state.students.push(data);
  },
};

const actions = {
  // commit usa a atribuicao criada no mutations
  createUser({ commit }, form) {
    commit("setdataStudent", form);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
