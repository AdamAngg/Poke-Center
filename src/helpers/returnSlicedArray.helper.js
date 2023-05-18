export const returnSlicedArray = (
  array,
  searchedPokemon,
  currentPage,
  itemsPerPage
) => {
  const slice = currentPage * itemsPerPage;
  return array
    .filter((pokemon) => pokemon.name.toLowerCase().includes(searchedPokemon))
    .slice(slice - itemsPerPage, slice);
};
