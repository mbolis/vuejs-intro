import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./components/HomePage.vue"
import DiceRoller from "./components/DiceRoller.vue";
import RiskSimulator from "./components/RiskSimulator.vue";
import ChessClocksBoard from "./components/ChessClocksBoard.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: "/", component: HomePage },
        { path: "/roller", component: DiceRoller },
        { path: "/risk", component: RiskSimulator },
        { path: "/clock", component: ChessClocksBoard},
    ],
})