import React, { useEffect } from "react";
import { PokemnonRow } from "./PokemonRow";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPokemon, fetchPokemon } from "../store/pokemonSlice";
import { fetchCurrentPokemon } from "../store/pokemonInfoSlice";
import { LoadingSpinner } from "./Spinner";

export const PokemonList = () => {
  const pokemonExtendedInfoArray = useSelector(
    (state) => state.pokemonInfoReducer.pokemonExtendedInfoArray
  );
  const searchedPokemon = useSelector(
    (state) => state.pokemonReducer.searchedPokemon
  );
  const isLoading = useSelector((state) => state.pokemonReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  useEffect(() => {
    if (isLoading === "loaded") dispatch(fetchCurrentPokemon());
  }, [isLoading, searchedPokemon]);

  return (
    <div className="pokemon-results-container">
      <div className="titles">
        <h3>Pokemon:</h3>
        <h3>More info:</h3>
      </div>
      <ul className="pokemon-container">
        {isLoading === "true" && <LoadingSpinner />}
        {isLoading === "loaded" &&
          pokemonExtendedInfoArray.map((pokemon) => {
            return (
              <PokemnonRow
                pokemon={pokemon}
                key={pokemon.id}
                onSelect={(pokemon) => dispatch(addCurrentPokemon(pokemon))}
              />
            );
          })}
      </ul>
    </div>
  );
};
