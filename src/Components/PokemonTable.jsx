import React, { useEffect } from "react";
import PokemnonRow from "./PokemonRow";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPokemon, fetchPokemon } from "../store/pokemonSlice";

const PokemonTable = () => {
  const pokemon = useSelector((state) => state.pokemonReducer.pokemon);
  const searchPokemon = useSelector(
    (state) => state.pokemonReducer.searchPokemon
  );
  const loading = useSelector((state) => state.pokemonReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  return (
    <div className="pokemon-results-container">
      <div className="titles">
        <h3>Pokemon:</h3>
        <h3>More info:</h3>
      </div>
      <ul className="pokemon-container">
        {loading && <div>wait...</div>}
        {pokemon
          .filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchPokemon)
          )
          .slice(0, 6)
          .map((pokemon) => (
            <PokemnonRow
              pokemon={pokemon}
              key={pokemon.name + 151}
              onSelect={(pokemon) => dispatch(addCurrentPokemon(pokemon))}
            />
          ))}
      </ul>
    </div>
  );
};
export default PokemonTable;
