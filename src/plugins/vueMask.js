import { mask } from "vue-the-mask";

import Vue from "vue";

// // As a plugin
// Vue.use(VueMask)

// Or as a directive
Vue.directive("mask", mask);

// // Or only as a filter
// Vue.filter('VMask', VueMaskFilter)
export default {
  directives: { mask },
};
