<template>
  <div>    
    <div class="top-bar clearfix">
      <button class="add-bag" @click="addBag">+</button>
      <span v-if="rolledAll">{{ totalResult }}</span>
      <button class="roll-all" @click="rollAll">POW!</button>
    </div>
    <div class="bag-holder">
      <dice-bag
        v-for="(bag, i) in bags"
        :key="bag.id"
        :bag="bag"
        @remove="removeBag(i)"
        @rolled="addRoll"
      ></dice-bag>
    </div>
  </div>
</template>

<script>
import DiceBag from "./DiceBag.vue";
import eventBus from "../event-bus";

export default {
  components: { DiceBag },
  data() {
    return {
      bags: [
        {
          id: 0,
          dice: [],
          result: ""
        }
      ],
      rolledAll: false,
      rolls: [],
      lastID: 0
    };
  },
  computed: {
    totalResult() {
      return this.rolledAll && this.rolls.reduce((sum, roll) => sum + roll, 0);
    }
  },
  methods: {
    rollAll() {
      this.rolls.length = 0;
      eventBus.$emit("rollAll");
      this.rolledAll = true;
    },
    addRoll(roll) {
      this.rolledAll = false;
      this.rolls.push(roll);
    },
    addBag() {
      this.bags.push({ id: ++this.lastID, dice: [], result: "" });
      this.rolledAll = false;
    },
    removeBag(i) {
      this.bags.splice(i, 1);
    }
  }
};
</script>

<style>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.roll-all {
  font-size: 150%;
  width: 4em;
  height: 3em;
  line-height: 2em;
  text-align: center;
  color: gold;
  background: crimson;
  cursor: grabbing;
  border-radius: 15%;
  border: none;
  box-shadow: 2px 2px 4px 1px gray;
  float: right;
}
.top-bar {
  margin-bottom: 0.5em;
}

.roll-all:hover {
  animation: blinkingText 0.6s infinite;
}
@keyframes blinkingText {
  0% {
    color: gold;
    background: crimson;
  }
  100% {
    color: transparent;
    background: red;
  }
} /* Andra stai maaaaaaale! :-)*/
</style>
