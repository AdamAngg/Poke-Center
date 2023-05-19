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

export const PokemonList = () => {
  const pokemonExtendedInfoArray = useSelector(
    (state) => state?.pokemonInfoReducer?.pokemonExtendedInfoArray
  );
  const pokemonArray = useSelector(
    (state) => state?.pokemonInfoReducer?.pokemon
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
  const currentPage = useSelector(
    (state) => state?.pokemonReducer?.currentPage
  );
  const itemsPerPage = useSelector(
    (state) => state?.pokemonReducer?.itemsPerPage
  );
  const totalPages = Math.ceil(pokemonArray.length / itemsPerPage);
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
      {isLoadingExtendedArray === "loaded" && (
        <div className="pagination-container">
          {currentPage - 1 === 0 || containsSpecialChars(searchedPokemon) ? (
            ""
          ) : (
            <button
              className="generations-btn pagination--hover--left"
              onClick={() => dispatch(decrementCurrentPage())}
            >
              <span>Page {currentPage - 1}</span>
            </button>
          )}
          {totalPages === currentPage ||
          containsSpecialChars(searchedPokemon) ? (
            ""
          ) : (
            <button
              className="generations-btn pagination--hover--right"
              onClick={() => dispatch(incrementCurrentPage())}
            >
              <span>Page {currentPage + 1}</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
