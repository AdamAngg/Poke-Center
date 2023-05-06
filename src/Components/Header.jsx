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
      <div className="search">
        <input
          className="search__bar"
          placeholder="Search your pokemon..."
          onChange={(evt) =>
            dispatch(addSearchPokemon(evt.target.value.toLowerCase()))
          }
        />
        <div className="search__btn">
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
      <div className="liked-pokemons">
        <div className="liked-pokemons__btn">
          <ion-icon name="bookmark-outline"></ion-icon>
          <span>Your Pokemon's</span>
        </div>
      </div>
    </header>
  );
};
