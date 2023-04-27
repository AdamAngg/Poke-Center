import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentPokemon } from "../store/pokemonInfoSlice";

const PokemnonRow = ({ pokemon, onSelect }) => {
  const capitalizeWord = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  const reduxValue = useSelector(
    (state) => state?.pokemonInfoReducer?.pokemonInfo?.types[0]?.type?.name
  );
  React.useEffect(() => {
    dispatch(
      fetchCurrentPokemon("https://pokeapi.co/api/v2/pokemon/" + pokemon.name)
    );
  }, [dispatch]);
  React.useEffect(() => {
    setColor(reduxValue);
    console.log(color);
  }, []);

  return (
    <li className="pokemon">
      <figure
        key={pokemon.name}
        className={"pokemon-preview pokemon-preview__" + color}
      >
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
