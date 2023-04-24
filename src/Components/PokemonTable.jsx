import React, { useEffect } from "react";
import PokemnonRow from "./PokemonRow";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPokemon, fetchPokemon } from "../store/pokemonSlice";

const PokemonTable = ({ filter }) => {
  const pokemon = useSelector((state) => state.pokemonReducer.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  return (
    <div>
      <table width={"100%"}>
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon
            .filter((pokemon) => pokemon.name.toLowerCase().includes(filter))
            .slice(0, 20)
            .map((pokemon) => (
              <PokemnonRow
                pokemon={pokemon}
                key={pokemon.name + 151}
                onSelect={(pokemon) => dispatch(addCurrentPokemon(pokemon))}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default PokemonTable;
