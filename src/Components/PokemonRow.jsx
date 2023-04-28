import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addID } from "../store/pokemonInfoSlice";

const PokemnonRow = ({ pokemonCurrent, onSelect }) => {
  const capitalizeWord = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonReducer.pokemon);
  const pokemonID = pokemon.indexOf(pokemonCurrent, 0);

  const pokemonArrayOfColors = useSelector(
    (state) => state.pokemonInfoReducer.pokemonColor
  );
  const pokemonFotoArray = useSelector(
    (state) => state.pokemonInfoReducer.pokemonFoto
  );

  React.useEffect(() => {
    dispatch(addID(pokemonID));
  });
  return (
    <li className="pokemon">
      <figure
        key={pokemonCurrent.name}
        className={
          "pokemon-preview pokemon-preview__" + pokemonArrayOfColors[pokemonID]
        }
      >
        <img src={pokemonFotoArray[pokemonID]} className="pokemon-img" alt="" />
      </figure>
      <p className="pokemon-name">{capitalizeWord(pokemonCurrent.name)}</p>
      <button
        className="pokemon-btn"
        onClick={() => {
          onSelect(pokemonCurrent);
        }}
      >
        Select
      </button>
    </li>
  );
};
export default PokemnonRow;
