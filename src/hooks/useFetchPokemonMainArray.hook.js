import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPokemon } from "../store/pokemonInfoSlice";
export const useFetchPokemonMainArray = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);
};
