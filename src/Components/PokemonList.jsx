import React from "react";
import { PokemnonRow } from "./PokemonRow";
import { useDispatch, useSelector } from "react-redux";
import {
  addCurrentPokemon,
  addCurrentPokemonExtendedInfo,
  incrementCurrentPage,
  decrementCurrentPage,
} from "../store/pokemonSlice";
import { LoadingSpinner } from "./Spinner";
import { useFetchPokemonMainArray } from "../hooks/useFetchPokemonMainArray.hook";
import { Error } from "./Error";
import { containsSpecialChars } from "../helpers/containsSpecialChars.helper";
import { useFetchPokemonExtendedArray } from "../hooks/useFetchPokemonExtendedArray.hook";
import { Pagination } from "./Pagination";

export const PokemonList = () => {
  const pokemonExtendedInfoArray = useSelector(
    (state) => state?.pokemonInfoReducer?.pokemonExtendedInfoArray
  );

  const pokemonSpeciesArray = useSelector(
    (state) => state?.pokemonInfoReducer?.pokemonSpeciesArray
  );
  const searchedPokemon = useSelector(
    (state) => state?.pokemonReducer?.searchedPokemon
  );

  const isLoadingExtendedArray = useSelector(
    (state) => state?.pokemonInfoReducer?.extendedInfoArrayloading
  );

  const dispatch = useDispatch();

  const pokemonListItems = pokemonExtendedInfoArray.map((pokemon, index) => {
    return (
      <PokemnonRow
        key={pokemon.id}
        boolean={true}
        id={pokemon.id}
        pokemon={pokemon}
        japanName={pokemonSpeciesArray[index]?.names[0]?.name}
        onSelect={(pokemon) => {
          dispatch(
            addCurrentPokemon(pokemon),
            dispatch(addCurrentPokemonExtendedInfo(pokemonSpeciesArray[index]))
          );
        }}
      />
    );
  });

  useFetchPokemonMainArray(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );

  useFetchPokemonExtendedArray(isLoadingExtendedArray);

  return (
    <div
      className={
        "pokemon-results-container " +
        (containsSpecialChars(searchedPokemon) &&
          "pokemon-results-container__error")
      }
    >
      <ul className="results">
        {isLoadingExtendedArray === "true" && <LoadingSpinner />}
        {isLoadingExtendedArray === "false" && (
          <Error
            key={1}
            ErrorMsg="Something went wrong with catching your pokemons..."
            ErrorIcon="alert-circle-outline"
          />
        )}
        {containsSpecialChars(searchedPokemon) && (
          <Error
            key={2}
            ErrorMsg="You trying to trick me? Aren't you? :( "
            ErrorIcon="warning-outline"
          />
        )}
        {isLoadingExtendedArray === "loaded" && pokemonListItems}
      </ul>

      {isLoadingExtendedArray === "loaded" && <Pagination />}
    </div>
  );
};
