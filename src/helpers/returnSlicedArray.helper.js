export const returnSlicedArray = (array, searchedPokemon) => {
  return array
    .filter((pokemon) => pokemon.name.toLowerCase().includes(searchedPokemon))
    .slice(0, 20);
};
