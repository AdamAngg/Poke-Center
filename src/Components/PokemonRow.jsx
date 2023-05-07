import React from "react";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.helper";
import { useToggleClick } from "../hooks/useToggleClick.hook";
export const PokemnonRow = ({ pokemon, onSelect }) => {
  const [onClickHandler, active, currentElementRef, className] = useToggleClick(
    "element",
    "element__active"
  );
  return (
    <li
      onClick={() => {
        onSelect(pokemon);
        onClickHandler();
      }}
      className={"element " + (active ? className : "")}
      ref={currentElementRef}
    >
      <div className="element__container">
        <figure
          key={pokemon?.name}
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
          <p className="element__jname">Name</p>
        </div>
      </div>
    </li>
  );
};
