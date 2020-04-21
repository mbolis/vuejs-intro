import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const dice = {
    namespaced: true,
    state: {
        lastIdBag: 0,
        bags: [{
            id: 0,
            lastId: 0,
            result: null,
            dice: [{
                id: 0,
                faces: (1 + Math.random() * 20) | 0,
                number: (1 + Math.random() * 5) | 0,
                color: "#" + (((1 << 24) * Math.random()) | 0).toString(16)
            }]
        }],
        rollingAll: false,
        result: null,
    },
    mutations: {
        ADD_BAG: state => {
            state.bags.push({ id: ++state.lastIdBag, dice: [], result: null })
            state.rollingAll = false;
        },
        REMOVE_BAG: (state, id) => {
            const i = state.bags.findIndex(b => b.id === id)
            state.bags.splice(i, 1)
        },
        POST_ROLL: (state, roll) => {
            state.rolls.push(roll)
        },
        ROLL_SINGLE: (state, id) => {
            const bag = state.bags
                .find(b => b.id === id)

            rollBag(bag)

            state.rollingAll = false;
        },
        ROLL_ALL: (state) => {
            state.bags.forEach(rollBag)

            state.result = state.bags
                .map(b => b.result)
                .reduce((sum, roll) => sum + roll, 0)

            state.rollingAll = true;
        },
    },
    actions: {
        addBag(context) {
            context.commit('ADD_BAG')
        },
        removeBag(context, id) {
            context.commit('REMOVE_BAG', id)
        },
        rollSingle(context, id) {


            context.commit('ROLL_SINGLE', id)
        },
        rollAll(context) {
            context.commit('ROLL_ALL')
        }
    }
}

const chess = {
    namespaced: true,
    state: {
        status: "setup",
    },
    mutations: {
        setStatus: (state, status) =>
            state.status = status,
    },
}

function rollDice({ number, faces }) {
    let total = 0;
    for (let i = 0; i < number; i++) {
        total += (1 + Math.random() * faces) | 0;
    }
    return total;
}

function rollBag(bag) {
    bag.result = bag.dice
        .map(rollDice)
        .reduce((sum, r) => sum + r, 0);
}



export default new Vuex.Store({
    modules: {
        dice,
        chess,
    }
})