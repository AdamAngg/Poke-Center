import React from "react";
import { Slider } from "./Slider";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.helper";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { useHasMatchingID } from "../hooks/useHasMatchingID.hook";
import { addLikedPokemon, deleteLikedPokemon } from "../store/pokemonInfoSlice";
const StyledButton = styled.button`
  background-color: ${(props) => `var(--${props.color})`};
  color: #fff3e2;
`;
export const PokemonInfo = ({
  currentlySelectedPokemon,
  name,
  sprites,
  id,
  types,
  stats,
  extendedInfoArray,
}) => {
  console.log(currentlySelectedPokemon);
  const dispatch = useDispatch();
  const hasMatchingID = useHasMatchingID(currentlySelectedPokemon.id);

  const onClickHandler = () => {
    hasMatchingID
      ? dispatch(deleteLikedPokemon(currentlySelectedPokemon.id))
      : dispatch(addLikedPokemon(currentlySelectedPokemon));
  };

  return (
    <div className="pokemoninfo-container">
      <Slider
        images={currentlySelectedPokemon.sprites.other["official-artwork"]}
        key={currentlySelectedPokemon.id}
        types={currentlySelectedPokemon.types}
        id={currentlySelectedPokemon.id}
        stats={currentlySelectedPokemon.stats}
      />
      <div className="titles">
        <div className="pokeball-container">
          <div
            key={currentlySelectedPokemon.id}
            className="pokeball"
            data-active={hasMatchingID}
            onClick={onClickHandler}
          >
            <div className="pokeball__button" data-active={hasMatchingID}></div>
          </div>
        </div>
        <h3>{capitalizeFirstLetter(currentlySelectedPokemon.name)}</h3>
        <h4>{extendedInfoArray?.names[0]?.name}</h4>
      </div>
      <div className="description">
        <h3>{extendedInfoArray?.flavor_text_entries[9]?.flavor_text}</h3>
      </div>

      <div className="types">
        {currentlySelectedPokemon.types.map((type, i) => (
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
        {currentlySelectedPokemon.stats.slice(1).map((stats, i) => (
          <div className="stat" key={i}>
            <span>{stats.base_stat}</span>
            <span>{capitalizeFirstLetter(stats.stat.name)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
