import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        rolls: [],
        rollingAll: false,
        rollCount: 0,
    },
    getters: {
        totalRolled: state =>
            state.rollingAll && state.rolls.reduce((sum, roll) => sum + roll, 0),
    },
    mutations: {
        postRoll: (state, roll) => {
            state.rolls.push(roll);
        },
        rollSingle: state => {
            state.rollingAll = false;
        },
        rollAll: state => {
            state.rolls.length = 0;
            state.rollingAll = true;
            state.rollCount++;
        },
    },
})