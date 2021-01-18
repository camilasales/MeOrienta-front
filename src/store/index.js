import Vue from "vue";
import Vuex from "vuex";

import student from "./modules/student";

Vue.use(Vuex);

export default new Vuex.Store({
  //strict: true,
  modules: {
    student,
  },
});
