import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCurrentPokemon } from "../store/pokemonInfoSlice";
import { fetchSpecies } from "../store/pokemonInfoSlice";
export const useFetchPokemonExtendedArray = (isLoadingExtendedArray) => {
  const searchedPokemon = useSelector(
    (state) => state?.pokemonReducer?.searchedPokemon
  );
  const isLoadingMainArray = useSelector(
    (state) => state?.pokemonInfoReducer?.pokemonArrayLoading
  );

  const currentPage = useSelector(
    (state) => state?.pokemonReducer?.currentPage
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoadingMainArray === "loaded") dispatch(fetchCurrentPokemon());
  }, [isLoadingMainArray, searchedPokemon, currentPage]);
  useEffect(() => {
    if (isLoadingExtendedArray === "loaded");
    dispatch(fetchSpecies());
  }, [isLoadingExtendedArray, searchedPokemon, currentPage]);
};
