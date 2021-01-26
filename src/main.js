import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import routes from "./routes";
import VueRouter from "vue-router";
import { RootStore } from "./store";

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(RootStore);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
