// This file manages the user interface for summoning Pokémon.

import React, { useState } from 'react';
import { summonPokemon } from './gacha-system';
import { Pokemon } from '../models/pokemon';

const SummonInterface: React.FC = () => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSummon = async () => {
        setLoading(true);
        const summonedPokemon = await summonPokemon();
        setPokemon(summonedPokemon);
        setLoading(false);
    };

    return (
        <div className="summon-interface">
            <h2>Summon Your Pokémon!</h2>
            <button onClick={handleSummon} disabled={loading}>
                {loading ? 'Summoning...' : 'Summon Pokémon'}
            </button>
            {pokemon && (
                <div className="pokemon-display">
                    <h3>You summoned:</h3>
                    <p>Name: {pokemon.name}</p>
                    <p>Type: {pokemon.type}</p>
                    <p>Rarity: {pokemon.rarity}</p>
                </div>
            )}
        </div>
    );
};

export default SummonInterface;