import React from "react";
import "../styles/styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addSearchPokemon } from "../store/pokemonSlice";
import { Error } from "./Error";
import { containsSpecialChars } from "../helpers/containsSpecialChars.helper";
export const Header = () => {
  const dispatch = useDispatch();
  const searchedPokemon = useSelector(
    (state) => state?.pokemonReducer?.searchedPokemon
  );
  const likedPokemonArray = useSelector(
    (state) => state?.pokemonReducer?.pokemonLikedArray
  );
  return (
    <header className="header">
      <img
        src={require("../assets/images/logo.png")}
        alt="logo"
        className="header__logo"
      />
      <div
        className={
          "search " +
          (containsSpecialChars(searchedPokemon) ? "search__error" : "")
        }
      >
        <input
          className="search__bar "
          placeholder="Search your pokemon..."
          onChange={(evt) => {
            dispatch(addSearchPokemon(evt.target.value.toLowerCase()));
          }}
          onFocus={(evt) => {
            evt.target.parentNode.classList.add("search__focus");
          }}
          onBlur={(evt) => {
            evt.target.parentNode.classList.remove("search__focus");
          }}
        />
        <div className="search__btn">
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
      <div className="liked-pokemons">
        <div className="liked-pokemons__btn">
          <img
            src={require("../assets/images/pokeball.png")}
            alt="logo"
            className="header__logo"
          />
          <span>Your Pokemon's</span>
        </div>

        <div className="liked">
          <ul className="liked-list">
            {/* <Error
              ErrorMsg="Your pokemon is no where to be found..."
              ErrorIcon="bug-outline"
            /> */}
            {}
          </ul>
        </div>
      </div>
    </header>
  );
};
