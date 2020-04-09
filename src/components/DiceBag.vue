<template>
  <div class="bag clearfix">
    <button class="remove-bag" @click="removeMe" title="Remove dice bag">&times;</button>
    <button class="show-add-dice-dialog" @click="showAddDiceDialog">+</button>
    <dice-box v-for="(die, i) in bag.dice" :die="die" :key="die.id" @remove="removeDice(i)"></dice-box>
    <button class="roll-button" @click="clickRoll">Roll</button>
    <div class="bag-result">{{ result }}</div>
  </div>
</template>

<script>
import DiceBox from "./DiceBox.vue";
import { mapState } from "vuex";

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
  computed: mapState([
    "rollCount"
  ]),
  watch: {
      rollCount() {
        this.roll();
      }
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
    clickRoll() {
        this.$store.commit("rollSingle");
        this.roll();
    },
    roll() {
      this.result = this.bag.dice
        .map(d => this.rollDice(d.number, d.faces))
        .reduce((sum, r) => sum + r, 0);

      this.$store.commit("postRoll", this.result);
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
  float: right;
  font: bold;
}
.remove-bag{
  width: 1.25em;
  height: 1.25em;
  line-height: 1em;
  text-align: center;
  padding: 0 0.25em;
  border: 1px solid gray;
  background: darkred;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  box-shadow: 1px 1px 2px 0 gray;
  margin-right: 5px;
}

.show-add-dice-dialog {
  margin-right: 5px;
}

.roll-button {
  float: right;
}
</style>