import React from "react";
import { useDispatch } from "react-redux";
import { addSearchPokemon } from "../store/pokemonSlice";
import { Navbar } from "./Navbar";

export const PokemonFilter = () => {
  const dispatch = useDispatch();
  return (
    <Navbar onChange={(evt) => dispatch(addSearchPokemon(evt.target.value))} />
  );
};
