import Vue from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "boxicons";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
