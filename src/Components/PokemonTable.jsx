import React, { useEffect } from "react";
import PokemnonRow from "./PokemonRow";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPokemon, fetchPokemon } from "../store/pokemonSlice";
import { fetchCurrentPokemon } from "../store/pokemonInfoSlice";
import LoadingSpinner from "./Spinner";
import { emptyArr } from "../store/pokemonInfoSlice";

export const PokemonTable = () => {
  const pokemon = useSelector((state) => state.pokemonReducer.pokemon);
  const searchPokemon = useSelector(
    (state) => state.pokemonReducer.searchPokemon
  );
  const isloading = useSelector((state) => state.pokemonReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);
  useEffect(() => {
    dispatch(emptyArr());
    pokemon
      .filter((pokemon) =>
        pokemon.name.toLowerCase().includes(toLowerCase(searchPokemon))
      )
      .slice(0, 20)
      .map((pokemon) => dispatch(fetchCurrentPokemon(pokemon.url)));
  }, [pokemon, searchPokemon, dispatch]);
  return (
    <div className="pokemon-results-container">
      <div className="titles">
        <h3>Pokemon:</h3>
        <h3>More info:</h3>
      </div>
      <ul className="pokemon-container">
        {isloading && <LoadingSpinner />}

        {!isloading &&
          pokemon
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(toLowerCase(searchPokemon))
            )
            .slice(0, 20)
            .map((pokemon) => {
              return (
                <PokemnonRow
                  pokemonCurrent={pokemon}
                  key={pokemon.name + 151}
                  onSelect={(pokemon) => dispatch(addCurrentPokemon(pokemon))}
                />
              );
            })}
      </ul>
    </div>
  );
};
