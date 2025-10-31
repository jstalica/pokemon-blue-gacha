// This file defines the structure of Pokémon objects for the gacha system.

export interface Pokemon {
    id: number;
    name: string;
    type: string[];
    rarity: string;
    abilities: string[];
    baseStats: {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    };
}

// Example Pokémon data
export const pokemonList: Pokemon[] = [
    {
        id: 1,
        name: "Bulbasaur",
        type: ["Grass", "Poison"],
        rarity: "Common",
        abilities: ["Overgrow", "Chlorophyll"],
        baseStats: {
            hp: 45,
            attack: 49,
            defense: 49,
            specialAttack: 65,
            specialDefense: 65,
            speed: 45,
        },
    },
    {
        id: 4,
        name: "Charmander",
        type: ["Fire"],
        rarity: "Uncommon",
        abilities: ["Blaze", "Solar Power"],
        baseStats: {
            hp: 39,
            attack: 52,
            defense: 43,
            specialAttack: 60,
            specialDefense: 50,
            speed: 65,
        },
    },
    {
        id: 7,
        name: "Squirtle",
        type: ["Water"],
        rarity: "Common",
        abilities: ["Torrent", "Rain Dish"],
        baseStats: {
            hp: 44,
            attack: 48,
            defense: 65,
            specialAttack: 50,
            specialDefense: 64,
            speed: 43,
        },
    },
    // Additional Pokémon can be added here
];