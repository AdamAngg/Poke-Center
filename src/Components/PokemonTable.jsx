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
    <div>
      <div className="titles">
        <h2>Pokemon</h2>
        <h2>Type</h2>
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
