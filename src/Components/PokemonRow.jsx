import React from "react";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.helper";
import { useToggleClick } from "../hooks/useToggleClick.hook";
import { useChangeOpacity } from "../hooks/useChangeOpacity.hook";
import { useSelector } from "react-redux";
export const PokemnonRow = ({ pokemon, onSelect, japanName, id }) => {
  const [onClickHandler, currentElementRef] = useToggleClick({
    element: "element",
    className: "element__active",
  });
  const likedArray = useSelector(
    (state) => state.pokemonReducer.pokemonLikedArray
  );
  console.log(id);
  const hasMatchingID = likedArray.some((obj) => obj.pokemonInfo.id === id);
  useChangeOpacity();
  return (
    <li
      onClick={() => {
        onSelect(pokemon);
        onClickHandler();
      }}
      className={"element element__opacity"}
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
          className="header__logo"
          style={{ opacity: hasMatchingID ? 1 : 0 }}
        />
      </div>
    </li>
  );
};
