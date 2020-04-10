<template>
  <div>
    <h2>Chess Clocks</h2>
    <button @click="addClock" :disabled="status != 'setup'">+</button>
    <span>
      <input class="min" type="number" v-model="minutes" :disabled="status != 'setup'"/> m
      <span>+</span>
      <input class="sec" type="number" v-model="seconds " :disabled="status != 'setup'"/> s
    </span>
    <span class="status">{{status}}</span>
    <button @click="changeStatus">{{this.changeStatusMessage}}</button>
    <div class="chess-cloacks-board">
      <chess-clock v-for="clk in clocks" :key="clk.id" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ChessClock from "./ChessClock.vue";

let lastID = 0;
const statusList = ["setup", "ready", "running", "over"];
const changeStatusMessages = ["Press when you are ready!", "Run?", "Stop it!!!", "Setup another one?"];

export default {
  name: "chess-board-clocks",
  components: { ChessClock },
  data() {
    return {
      minutes: 5,
      seconds: 3,
      clocks: [{ id: 0, remainingMillis: 1000 }]
    };
  },
  computed: {
    changeStatusMessage: function() {
      let pos = statusList.indexOf(this.status);
      return changeStatusMessages[pos];
    },
    ...mapState("chess", ["status"])
  },
  methods: {
    addClock() {
      this.clocks.push({
        id: ++lastID,
        remainingMillis: (this.minutes * 60 + this.seconds) * 1000
      });
    },
    changeStatus() {
      let pos = statusList.indexOf(this.status);
      let newStatus = statusList[(pos+1) % statusList.length];
      this.$store.commit("chess/setStatus", newStatus);
    }
  }
};
</script>

<style scoped>
.min {
  width: 4em;
}
.sec {
  width: 4em;
}
.status{
  background: var(--my-blue);
  color: var(--my-yellow);
  display: inline-block;
  width: 10em;
}
</style>