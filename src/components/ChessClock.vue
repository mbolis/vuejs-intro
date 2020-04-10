<template>
<body class="chess-clock clearBoth">
  <chess-clock-digit :value="tensMinutes"></chess-clock-digit>
  <chess-clock-digit :value="onesMinutes"></chess-clock-digit>
  <span class="colon">:</span>
  <chess-clock-digit :value="tensSeconds"></chess-clock-digit>
  <chess-clock-digit :value="onesSeconds"></chess-clock-digit>
</body>
</template>

<script>
import ChessClockDigit from "./ChessClockDigit.vue";
import { mapState } from "vuex";

export default {
  name: "chess-clock",
  components: { ChessClockDigit },
  data: function() {
    return {
      minutes: 24,
      seconds: 42
    };
  },
  computed: {
    tensMinutes: function() {
      return (this.minutes / 10) | 0;
    },
    onesMinutes: function() {
      return this.minutes % 10;
    },
    tensSeconds: function() {
      return (this.seconds / 10) | 0;
    },
    onesSeconds: function() {
      return this.seconds % 10;
    },
    ...mapState("chess", ["status"])
  }
};
</script>

<style scoped>
.chess-clock {
  margin: 2em;
  border: 1px solid var(--my-grey);
  border-radius: 3%;
  width: 30em;
  display: flex;
  align-content: center;
}
.colon {
  align-self: center;
  font-size: 5em;
  color: var(--my-red);
}
</style>