<template>
  <div class="digit">
    <div :class="{ light: top }" class="top"></div>
    <div :class="{ light: topLeft }" class="top-left"></div>
    <div :class="{ light: topRight }" class="top-right"></div>
    <div :class="{ light: middle }" class="middle"></div>
    <div :class="{ light: bottomLeft }" class="bottom-left"></div>
    <div :class="{ light: bottomRight }" class="bottom-right"></div>
    <div :class="{ light: bottom }" class="bottom"></div>
  </div>
  <!-- TODO Remove
  <button @click="value = null">&nbsp;</button>
  <button @click="value = 0">0</button>
  <button @click="value = 1">1</button>
  <button @click="value = 2">2</button>
  <button @click="value = 3">3</button>
  <button @click="value = 4">4</button>
  <button @click="value = 5">5</button>
  <button @click="value = 6">6</button>
  <button @click="value = 7">7</button>
  <button @click="value = 8">8</button>
  <button @click="value = 9">9</button>
  -->
</template>

<script>
export default {
  props: {
    value: Number
  },
  computed: {
    top() {
      return this.valueIn(0, 2, 3, 5, 6, 7, 8, 9);
    },
    topLeft() {
      return this.valueIn(0, 4, 5, 6, 8, 9);
    },
    topRight() {
      return this.valueIn(0, 1, 2, 3, 4, 7, 8, 9);
    },
    middle() {
      return this.valueIn(2, 3, 4, 5, 6, 8, 9);
    },
    bottomLeft() {
      return this.valueIn(0, 2, 6, 8);
    },
    bottomRight() {
      return this.valueIn(0, 1, 3, 4, 5, 6, 7, 8, 9);
    },
    bottom() {
      return this.valueIn(0, 2, 3, 5, 6, 8, 9);
    }
  },
  methods: {
    valueIn(...set) {
      return set.includes(this.value);
    }
  }
};
</script>

<style>
.digit {
  width: 50px;
  height: 100px;
  position: relative;
  margin: 0.2em;
}
.top,
.top-left,
.top-right,
.middle,
.bottom-left,
.bottom-right,
.bottom {
  position: absolute;
  display: none;
}
.top.light,
.top-left.light,
.top-right.light,
.middle.light,
.bottom-left.light,
.bottom-right.light,
.bottom.light {
  display: block;
}
.top {
  top: 5%;
  left: 50%;
  width: 80%;
  margin-left: calc(-40% - 0.2em);
  border-top: 0.2em solid var(--my-red);
  border-left: 0.2em solid transparent;
  border-right: 0.2em solid transparent;
}
.top-left {
  top: 6%;
  left: 11%;
  height: 40%;
  margin-left: calc(-5% - 0.25em);
  border-left: 0.2em solid var(--my-red);
  border-top: 0.2em solid transparent;
}
.top-right {
  top: 6%;
  right: 11%;
  height: 40%;
  margin-right: calc(-5% - 0.25em);
  border-right: 0.2em solid var(--my-red);
  border-top: 0.2em solid transparent;
}
.middle {
  top: 49%;
  left: 50%;
  width: 80%;
  margin-left: calc(-40% - 0.2em);
  border-top: 0.2em solid var(--my-red);
  border-left: 0.2em solid transparent;
  border-right: 0.2em solid transparent;
}
.bottom-left {
  bottom: 5%;
  left: 11%;
  height: 40%;
  margin-left: calc(-5% - 0.25em);
  border-left: 0.2em solid var(--my-red);
  border-top: 0.2em solid transparent;
  border-bottom: 0.2em solid transparent;
}
.bottom-right {
  bottom: 5%;
  right: 11%;
  height: 40%;
  margin-right: calc(-5% - 0.25em);
  border-right: 0.2em solid var(--my-red);
  border-top: 0.2em solid transparent;
  border-bottom: 0.2em solid transparent;
}
.bottom {
  bottom: 4%;
  left: 50%;
  width: 80%;
  margin-left: calc(-40% - 0.2em);
  border-bottom: 0.2em solid var(--my-red);
  border-left: 0.2em solid transparent;
  border-right: 0.2em solid transparent;
}
</style>