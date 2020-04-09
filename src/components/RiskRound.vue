<template>
  <div class="round">
    <div v-for="v in values" :key="v.tanks">
        {{ v.tanks }}: {{ v.perc }}
        <div class="bar">
            <span :style="{ width: v.width }"></span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "risk-round",
  props: { data: Object },
  computed: {
    values() {
      return Object.entries(this.data)
        .sort(([k1], [k2]) => k2.localeCompare(k1))
        .map(([tanks, p]) => ({
          tanks,
          width: Math.round(p * 100) + "%",
          perc: (p * 100).toFixed(2) + "%"
        }));
    }
  }
};
</script>

<style scoped>
.round {
    color: green;
    background-color: lightsalmon;
    display: inline-block;
    width: 20%;
    border: 1px solid black;
    margin: 0.125em;
    vertical-align: top;
}
.bar {
    display: inline-block;
    width: 50%;
    height: 1.5em;
}
.bar span {
    height: 1em;
    display: inline-block;
    background: green;
    vertical-align: middle;
}
</style>