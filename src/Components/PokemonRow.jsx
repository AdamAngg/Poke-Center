import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentPokemon } from "../store/pokemonInfoSlice";

const PokemnonRow = ({ pokemon, onSelect }) => {
  const capitalizeWord = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentPokemon(pokemon.url));
  }, []);

  const pokeColor = useSelector(
    (state) => state?.pokemonInfoReducer?.pokemonInfo?.types[0]?.type?.name
  );
  console.log(pokeColor);
  return (
    <li className="pokemon">
      <figure className={"pokemon-preview pokemon-preview__" + pokeColor}>
        <img src="" alt="" />
      </figure>
      <p className="pokemon-name">{capitalizeWord(pokemon.name)}</p>
      <button
        className="pokemon-btn"
        onClick={() => {
          onSelect(pokemon);
        }}
      >
        Select
      </button>
    </li>
  );
};
export default PokemnonRow;
