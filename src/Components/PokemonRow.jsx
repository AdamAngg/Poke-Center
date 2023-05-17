import React from "react";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.helper";
import { useToggleClick } from "../hooks/useToggleClick.hook";
import { useChangeOpacity } from "../hooks/useChangeOpacity.hook";
import { useHasMatchingID } from "../hooks/useHasMatchingID.hook";
import { useSelector } from "react-redux";
export const PokemnonRow = ({ pokemon, onSelect, japanName, id, boolean }) => {
  const [onClickHandler, currentElementRef] = useToggleClick({
    element: "element",
    className: "element__active",
    dispatching: true,
  });
  const hasMatchingID = useHasMatchingID(id);
  useChangeOpacity(boolean);
  const pokemonNodeClicked = useSelector(
    (state) => state.pokemonReducer.pokemonNodeClicked
  );
  console.log(pokemonNodeClicked);
  console.log(id);
  return (
    <li
      onClick={() => {
        onSelect(pokemon);
        onClickHandler();
      }}
      className={
        "element " + (pokemonNodeClicked === id ? "element__active" : "")
      }
      id={id}
      ref={currentElementRef}
    >
      <div className="element__container">
        <figure
          className={
            "element__preview element__preview__" +
            pokemon?.types[0]?.type?.name
          }
        >
          <img
            src={pokemon?.sprites?.front_default}
            className="pokemon-img"
            alt={pokemon?.name + "from up front"}
          />
        </figure>
        <div className="element__data">
          <h4 className="element__name">
            {capitalizeFirstLetter(pokemon?.name)}
          </h4>
          <p className="element__jname">{japanName}</p>
        </div>
        <img
          src={require("../assets/images/pokeball.png")}
          alt="logo"
          className={
            "element__logo " +
            (hasMatchingID ? "element__logo__in" : "element__logo__out")
          }
        />
      </div>
    </li>
  );
};
