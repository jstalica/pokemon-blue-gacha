export enum Rarity {
    COMMON = 'Common',
    UNCOMMON = 'Uncommon',
    RARE = 'Rare',
    EPIC = 'Epic',
    LEGENDARY = 'Legendary'
}

export const rarityProbabilities = {
    [Rarity.COMMON]: 0.5,
    [Rarity.UNCOMMON]: 0.3,
    [Rarity.RARE]: 0.15,
    [Rarity.EPIC]: 0.04,
    [Rarity.LEGENDARY]: 0.01
};