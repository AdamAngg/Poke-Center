import React from "react";
import { Slider } from "./Slider";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.helper";
import { styled } from "styled-components";
const StyledButton = styled.button`
  background-color: ${(props) => `var(--${props.color})`};
  color: #fff3e2;
`;
export const PokemonInfo = ({ name, sprites, id, types, stats, japanName }) => {
  return (
    <div className="pokemoninfo-container">
      <Slider
        images={sprites.other["official-artwork"]}
        key={id}
        types={types}
        id={id}
        stats={stats}
      />
      <div className="titles">
        <h3>{capitalizeFirstLetter(name)}</h3>
        <h4>{japanName?.names[0]?.name}</h4>
      </div>
      <div className="types">
        {types.map((type) => (
          <StyledButton className="slider__btn__stats" color={type?.type?.name}>
            <span>{capitalizeFirstLetter(type?.type?.name)}</span>
          </StyledButton>
        ))}
      </div>
    </div>
  );
};
