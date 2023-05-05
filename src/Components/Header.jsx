import React from "react";
import "../styles/styles.scss";
import { useDispatch } from "react-redux";
import { addSearchPokemon } from "../store/pokemonSlice";
export const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="header">
      <img
        src={require("../images/logo.png")}
        alt="logo"
        className="header__logo"
      />
      <input
        className="search"
        placeholder="Search your pokemon..."
        onChange={(evt) =>
          dispatch(addSearchPokemon(evt.target.value.toLowerCase()))
        }
      />
      <button className="liked-pokemons">Your Pokemon's</button>
    </header>
  );
};
