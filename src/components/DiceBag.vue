<template>
  <div class="bag">
    <button @click="removeMe">&times;</button>
    <dice-box v-for="(die, i) in bag.dice" :die="die" :key="die.id" @remove="removeDice(i)"></dice-box>
    <button @click="showAddDiceDialog">+</button>
    <button @click="roll">Roll</button>
    <div class="bag-result">{{ result }}</div>
  </div>
</template>

<script>
import DiceBox from "./DiceBox.vue";
import eventBus from "../event-bus";

export default {
  name: "dice-bag",
  components: { DiceBox },
  props: ["bag"],
  data() {
    return {
      result: "",
      lastID: 0
    };
  },
  created() {
    eventBus.$on("rollAll", this.roll);
  },
  destroyed() {
    eventBus.$off("rollAll", this.roll);
  },
  methods: {
    removeMe() {
      this.$emit("remove");
    },
    removeDice(i) {
      this.bag.dice.splice(i, 1);
    },
    showAddDiceDialog() {
      //TODO: mostrare la finestra!
      this.bag.dice.push({
        id: ++this.lastID,
        faces: (1 + Math.random() * 20) | 0,
        number: (1 + Math.random() * 5) | 0,
        color: "#" + (((1 << 24) * Math.random()) | 0).toString(16)
      });

      // TODO: add color to colorSet
      // if (bag.dice[-1].)
      this.result = "";
    },
    roll() {
      this.result = this.bag.dice
        .map(d => this.rollDice(d.number, d.faces))
        .reduce((sum, r) => sum + r, 0);
      console.log(this.result);
      this.$emit("rolled", this.result);
    },
    rollDice(number, faces) {
      let total = 0;
      for (let i = 0; i < number; i++) {
        total += (1 + Math.random() * faces) | 0;
      }
      return total;
    }
  }
};
</script>

<style scoped>
.bag {
  border: 1px solid black;
  display: block;
  padding: 0.25em;
}
.bag-result {
  display: inline-block;
}
</style>