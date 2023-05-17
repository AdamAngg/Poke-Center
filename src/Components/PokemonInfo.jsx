import React, { useState } from "react";
import { Slider } from "./Slider";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.helper";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { addLikedPokemon } from "../store/pokemonSlice";
import { useHasMatchingID } from "../hooks/useHasMatchingID.hook";
const StyledButton = styled.button`
  background-color: ${(props) => `var(--${props.color})`};
  color: #fff3e2;
`;
export const PokemonInfo = ({
  name,
  sprites,
  id,
  types,
  stats,
  extendedInfoArray,
}) => {
  const hasMatchingID = useHasMatchingID(id);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    if (hasMatchingID) return;
    dispatch(addLikedPokemon());
  };

  return (
    <div className="pokemoninfo-container">
      <Slider
        images={sprites.other["official-artwork"]}
        key={id}
        types={types}
        id={id}
        stats={stats}
      />
      <div className="titles" onClick={onClickHandler}>
        <div className="pokeball-container" key={id}>
          <div className="pokeball" data-active={hasMatchingID}>
            <div className="pokeball__button" data-active={hasMatchingID}></div>
          </div>
        </div>
        <h3>{capitalizeFirstLetter(name)}</h3>
        <h4>{extendedInfoArray?.names[0]?.name}</h4>
      </div>
      <div className="description">
        <h3>{extendedInfoArray?.flavor_text_entries[9]?.flavor_text}</h3>
      </div>

      <div className="types">
        {types.map((type, i) => (
          <StyledButton
            key={i}
            className="slider__btn__stats"
            color={type?.type?.name}
          >
            <span>{capitalizeFirstLetter(type?.type?.name)}</span>
          </StyledButton>
        ))}
      </div>
      <div className="stats-container">
        {stats.slice(1).map((stats, i) => (
          <div className="stat" key={i}>
            <span>{stats.base_stat}</span>
            <span>{capitalizeFirstLetter(stats.stat.name)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
