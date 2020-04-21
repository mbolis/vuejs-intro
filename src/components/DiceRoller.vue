<template>
  <div>
    <div class="top-bar clearfix">
      <button class="add-bag" @click="addBag">+</button>
      <span v-if="rollingAll">{{ result }}</span>
      <button class="roll-all" @click="rollAll">POW!</button>
    </div>
    <div class="bag-holder">
      <dice-bag v-for="bag in bags" :key="bag.id" :bag="bag"></dice-bag>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import DiceBag from "./DiceBag.vue";

export default {
  components: { DiceBag },
  computed: mapState("dice", ["bags", "result", "rollingAll"]),
  methods: mapActions("dice", ["addBag", "rollAll"]),
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
} /* Andrea stai maaaaaaale! :-)*/
</style>
