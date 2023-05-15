import React, { useEffect } from "react";
import { PokemnonRow } from "./PokemonRow";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPokemon } from "../store/pokemonSlice";
import { fetchCurrentPokemon, fetchSpecies } from "../store/pokemonInfoSlice";
import { LoadingSpinner } from "./Spinner";
import { useFetchPokemonMainArray } from "../hooks/useFetchPokemonMainArray.hook";
import { Error } from "./Error";
import { containsSpecialChars } from "../helpers/containsSpecialChars.helper";

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
  const isLoadingMainArray = useSelector(
    (state) => state?.pokemonReducer?.loading
  );
  const isLoadingExtendedArray = useSelector(
    (state) => state?.pokemonInfoReducer?.loading
  );
  const dispatch = useDispatch();

  useFetchPokemonMainArray();

  useEffect(() => {
    if (isLoadingMainArray === "loaded")
      dispatch(fetchCurrentPokemon(), dispatch(fetchSpecies()));
  }, [isLoadingMainArray, searchedPokemon]);

  return (
    <div
      className={
        "pokemon-results-container " +
        (containsSpecialChars(searchedPokemon)
          ? "pokemon-results-container__error"
          : "")
      }
    >
      <ul className="results">
        {isLoadingExtendedArray === "true" && <LoadingSpinner />}
        {isLoadingExtendedArray === "false" && (
          <Error
            ErrorMsg="Something went wrong with catching your pokemons..."
            ErrorIcon="alert-circle-outline"
          />
        )}
        {containsSpecialChars(searchedPokemon) ? (
          <Error
            ErrorMsg="You trying too special type of typing :("
            ErrorIcon="warning-outline"
          />
        ) : (
          ""
        )}
        {isLoadingExtendedArray === "loaded" &&
          pokemonExtendedInfoArray.map((pokemon, index) => {
            return (
              <PokemnonRow
                pokemon={pokemon}
                japanName={pokemonSpeciesArray[index]?.names[0]?.name}
                key={pokemon.id}
                onSelect={(pokemon) => {
                  dispatch(addCurrentPokemon(pokemon));
                }}
              />
            );
          })}
      </ul>
    </div>
  );
};
