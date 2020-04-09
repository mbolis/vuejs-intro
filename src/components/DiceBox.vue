<template>
  <div class="dice" :style="{background: die.color}">
    {{ die.number }}d{{ die.faces }}
    <button class="remove-dice" @click="removeMe">&times;</button>
  </div>
</template>

<script>
export default {
  name: "dice-box",
  props: {
    die: {
      required: true
    }
  },
  methods: {
    removeMe() {
      this.$emit("remove");
    }
  }
};
</script>

<style scoped>
.dice {
  width: fit-content;
  display: inline-block;
  border: 1px solid black;
  margin-right: 0.25em;
  padding: 0.125em;
  border-radius: 2px;
}
.remove-dice {
  font-size: 70%;
  width: 1.25em;
  height: 1.25em;
  line-height: 1em;
  text-align: center;
  margin: -0.5em;
  padding: 0 0.25em;
  border: 1px solid gray;
  background: darkgray;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  box-shadow: 1px 1px 2px 0 gray;
}
</style>