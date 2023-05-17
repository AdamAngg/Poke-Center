import { useSelector } from "react-redux";
export const useHasMatchingID = (id) => {
  const likedArray = useSelector(
    (state) => state.pokemonReducer.pokemonLikedArray
  );

  const hasMatchingID = likedArray.some((obj) => obj.pokemonInfo.id === id);

  return hasMatchingID;
};
