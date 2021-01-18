import Vue from "vue";
import axios from "axios";

// const LS_TOKEN_ACCESS = "jwt-token-access";
// const LS_TOKEN_EXPIRES = "jwt-token-expires";
// const LS_TOKEN_REFRESH = "jwt-token-refresh";
// const LS_USER_ID = "user-id";

axios.defaults.baseURL = "enderecoApi";
Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  },
});
// axios.interceptors.request.use(
//   (config) => {
//     config.headers["Authorization"] = `Bearer ${localStorage.getItem(
//       LS_TOKEN_ACCESS
//     )}`;

//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   }
// );
// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
export { axios };
