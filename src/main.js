import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store/index.js";

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.prototype.$store = store;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
