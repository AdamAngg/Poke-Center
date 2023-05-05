import React, { useEffect } from "react";
import { PokemnonRow } from "./PokemonRow";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPokemon, fetchPokemon } from "../store/pokemonSlice";
import { fetchCurrentPokemon } from "../store/pokemonInfoSlice";

export const PokemonList = () => {
  const pokemon = useSelector((state) => state.pokemonReducer.pokemon);
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
        {isLoading === "loaded" &&
          pokemon
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(searchedPokemon)
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