import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";

import HomePage from "./components/HomePage.vue"
import DiceRoller from "./components/DiceRoller.vue";
import RiskSimulator from "./components/RiskSimulator.vue";


Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", component: HomePage},
    { path: "/roller", component: DiceRoller },
    { path: "/risk", component: RiskSimulator }
  ],
});

new Vue({
  router,
  render: h => h(App),
  created() {
    console.log("qui2");
  }
}).$mount('#app')
