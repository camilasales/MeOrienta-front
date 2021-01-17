import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import "@mdi/font/css/materialdesignicons.css";
import Vuetify from "vuetify/lib";
import VueMoment from "./plugins/vueMoment";
import vueMask from "./plugins/vueMask";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: "mdi", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
};
const theme = {
  options: {
    customProperties: true,
  },
};

new Vue({
  VueMoment,
  vueMask,
  theme,
  opts,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
