function calculateProbability(rarity: number, total: number): number {
    return (rarity / total) * 100;
}

function weightedRandom(weights: number[]): number {
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    const random = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    for (let i = 0; i < weights.length; i++) {
        cumulativeWeight += weights[i];
        if (random < cumulativeWeight) {
            return i;
        }
    }

    return weights.length - 1; // Fallback in case of rounding errors
}

export { calculateProbability, weightedRandom };