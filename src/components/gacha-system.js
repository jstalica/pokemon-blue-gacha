import { pokemonList } from './pokemon-list.js';

export class GachaSystem {
    constructor() {
        this.rarityRates = {
            Common: 60,
            Uncommon: 25,
            Rare: 12,
            Legendary: 3
        };
        this.pityCounter = 0;
        this.PITY_THRESHOLD = 10; // Guaranteed legendary after 10 pulls
    }

    guaranteedRareOrBetter() {
        // Now guarantees legendary
        const possiblePokemon = pokemonList.filter(pokemon => pokemon.rarity === 'Legendary');
        const randomIndex = Math.floor(Math.random() * possiblePokemon.length);
        return {
            pokemon: possiblePokemon[randomIndex],
            pityCounter: 0,
            isPity: false
        };
    }

    summonPokemon() {
        this.pityCounter++;
        let rarityToPull = '';
        
        // If we hit pity threshold, guarantee legendary
        if (this.pityCounter >= this.PITY_THRESHOLD) {
            rarityToPull = 'Legendary';
            this.pityCounter = 0; // Reset pity counter
        } else {
            const randomNum = Math.random() * 100;
            
            if (randomNum < this.rarityRates.Common) {
                rarityToPull = 'Common';
            } else if (randomNum < this.rarityRates.Common + this.rarityRates.Uncommon) {
                rarityToPull = 'Uncommon';
            } else if (randomNum < this.rarityRates.Common + this.rarityRates.Uncommon + this.rarityRates.Rare) {
                rarityToPull = 'Rare';
            } else {
                rarityToPull = 'Legendary';
                this.pityCounter = 0; // Reset on natural legendary pull
            }
        }

        const possiblePokemon = pokemonList.filter(pokemon => pokemon.rarity === rarityToPull);
        const randomIndex = Math.floor(Math.random() * possiblePokemon.length);
        return {
            pokemon: possiblePokemon[randomIndex],
            pityCounter: this.pityCounter,
            isPity: this.pityCounter >= this.PITY_THRESHOLD
        };
    }
}