import React from "react";
import { useDispatch } from "react-redux";
import { addSearchPokemon } from "../store/pokemonSlice";

const PokemonFilter = () => {
  const dispatch = useDispatch();
  return (
    <input onChange={(evt) => dispatch(addSearchPokemon(evt.target.value))} />
  );
};
export default PokemonFilter;
