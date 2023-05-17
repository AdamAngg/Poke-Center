import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCurrentPokemon } from "../store/pokemonInfoSlice";
import { fetchSpecies } from "../store/pokemonInfoSlice";
export const useFetchPokemonExtendedArray = () => {
  const searchedPokemon = useSelector(
    (state) => state?.pokemonReducer?.searchedPokemon
  );
  const isLoadingMainArray = useSelector(
    (state) => state?.pokemonReducer?.loading
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoadingMainArray === "loaded")
      dispatch(fetchCurrentPokemon(), dispatch(fetchSpecies()));
  }, [isLoadingMainArray, searchedPokemon]);
};
