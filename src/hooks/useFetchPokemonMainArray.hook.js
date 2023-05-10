import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPokemon } from "../store/pokemonSlice";
export const useFetchPokemonMainArray = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);
};
