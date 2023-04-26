import React from "react";
import { useDispatch } from "react-redux";
import { addSearchPokemon } from "../store/pokemonSlice";
import { Navbar } from "./Navbar";

const PokemonFilter = () => {
  const dispatch = useDispatch();
  return (
    <Navbar onChange={(evt) => dispatch(addSearchPokemon(evt.target.value))} />
  );
};
export default PokemonFilter;
