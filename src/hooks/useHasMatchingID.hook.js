import { useSelector } from "react-redux";
export const useHasMatchingID = (id) => {
  const likedPokemonArray = useSelector(
    (state) => state?.pokemonReducer?.pokemonLikedArray
  );

  const hasMatchingID = likedPokemonArray.some(
    (obj) => obj?.pokemonInfo?.id === id
  );

  return hasMatchingID;
};
