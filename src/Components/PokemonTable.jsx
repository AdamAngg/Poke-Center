import React, { useEffect } from "react";
import PokemnonRow from "./PokemonRow";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPokemon, fetchPokemon } from "../store/pokemonSlice";

const PokemonTable = () => {
  const pokemon = useSelector((state) => state.pokemonReducer.pokemon);
  const searchPokemon = useSelector(
    (state) => state.pokemonReducer.searchPokemon
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  return (
    <div className="pokemon-results-container">
      <div className="titles">
        <h3>Pokemon</h3>
        <h3>Info</h3>
      </div>

      {pokemon
        .filter((pokemon) => pokemon.name.toLowerCase().includes(searchPokemon))
        .slice(0, 20)
        .map((pokemon) => (
          <PokemnonRow
            pokemon={pokemon}
            key={pokemon.name + 151}
            onSelect={(pokemon) => dispatch(addCurrentPokemon(pokemon))}
          />
        ))}
    </div>
  );
};
export default PokemonTable;
