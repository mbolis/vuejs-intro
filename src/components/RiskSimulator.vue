<template>
    <div>
        <h2>Risk simulator (WIP)</h2>
        <input type="number" v-model="reds" placeholder="Reds" class="reds">
        <input type="number" v-model="blues" placeholder="Blues" class="blues">
        <br>
        Who wins ties?
        <label for="tie_breaker_red">
            <input type="radio" id="tie_breaker_red" value="red" v-model="tieWinner">
            Red
        </label>
        <label for="tie_breaker_blue">
            <input type="radio" id="tie_breaker_blue" value="blue" v-model="tieWinner">
            Blue
        </label>
        <br>
        <button @click="startAnalysis" :disabled="!reds || !blues">Analyze!</button>
        <div v-if="analysis">
            Red wins: {{ redWins }}, Blue wins: {{ blueWins }}<br>
            <div v-for="round in rounds" :key="round.id">
                <risk-round :data="round.red" />
                <risk-round :data="round.blue" />
            </div>
        </div>
    </div> 
</template>
<script>
import analyze from "../risk-calculator";
import RiskRound from "./RiskRound";

export default {
    name: "risk-simulator",
    components: { RiskRound },
    data() {
        return {
            reds: "",
            blues: "",
            tieWinner: "red",
            analysis: null,
        }
    },
    computed: {
        redWins() {
            return (this.analysis.redWins * 100).toFixed(2) + "%";
        },
        blueWins() {
            return (this.analysis.blueWins * 100).toFixed(2) + "%";
        },
        rounds() {
            return this.analysis.rounds.map(([red, blue]) => ({ red, blue }));
        }
    },
    methods: {
        startAnalysis() {
            this.analysis = analyze(this.reds, this.blues, {
                tieWinner: this.tieWinner,
            });
        },
    },
}
</script>
<style scoped>
.reds {
    border: 1px solid red;
}
.blues {
    border: 1px solid blue;
}
</style>