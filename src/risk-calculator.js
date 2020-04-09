function Territory(color, tanks) {
    this.color = color;
    this.tanks = tanks;
}

const roll = () => 1 + Math.random() * 6 | 0;
const rollDice = n =>
    Array.apply(null, Array(n)).map(roll).sort();

const zip = (a1, a2) =>
    a1.map((x1, i) => [x1, a2[i]]).filter(xs => xs[1]);

const opponent = color => color === "red" ? "blue" : "red";

const clash = (t1, t2, tieWinner) =>
    Object.entries(
        zip(rollDice(t1.tanks), rollDice(t2.tanks))
            .map(([r1, r2]) => { // who loses?
                if (r1 > r2) return t2.color;
                if (r1 < r2) return t1.color;
                return opponent(tieWinner);
            })
            .reduce((tot, r) => (tot[r] = tot[r] - 1, tot), {
                [t1.color]: t1.tanks,
                [t2.color]: t2.tanks,
            }))
        .map(data => new Territory(...data));

const clashToDeath = (t1, t2, tieWinner) => {
    const result = [];
    while (t1.tanks && t2.tanks) {
        const r = clash(t1, t2, tieWinner);
        result.push(r.map(t => t.tanks));
        [t1, t2] = r;
    }
    return result;
};

export default function(red, blue, { tries = 10000, tieWinner = "blue" } = {}) {
    const rounds = [];
    const point = 1 / tries;
    let redWins = 0, blueWins = 0;
    for (let i = 0; i < tries; i++) {
        const t1 = new Territory("red", red);
        const t2 = new Territory("blue", blue);
        clashToDeath(t1, t2, tieWinner)
        .forEach(([red, blue], i) => {
            const [redResult, blueResult] = rounds[i] || (rounds[i] = [{}, {}]);
            redResult[red] = point + (redResult[red] || 0);
            blueResult[blue] = point + (blueResult[blue] || 0);
            
            if (red === 0) blueWins += point;
            if (blue === 0) redWins += point;
        });
    }

    return { redWins, blueWins, rounds };
}