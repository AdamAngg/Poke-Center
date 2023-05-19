import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonNodeClicked: null,
  currentlySelectedPokemon: null,
  currentlySelectedPokemonExtendedInfo: null,
  searchedPokemon: "",
  currentPage: 1,
  itemsPerPage: 10,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addCurrentPokemon: (state, action) => {
      state.currentlySelectedPokemon = action.payload;
    },
    addPokemonNodeClicked: (state, action) => {
      state.pokemonNodeClicked = action.payload;
    },
    addSearchPokemon: (state, action) => {
      state.searchedPokemon = action.payload;
    },
    addCurrentPokemonExtendedInfo: (state, action) => {
      state.currentlySelectedPokemonExtendedInfo = action.payload;
    },
    incrementCurrentPage: (state) => {
      state.currentPage += 1;
    },
    decrementCurrentPage: (state) => {
      state.currentPage -= 1;
    },
    setDefaultPage: (state) => {
      state.currentPage = 1;
    },
  },
});
export const {
  addCurrentPokemon,
  addSearchPokemon,
  addCurrentPokemonExtendedInfo,
  addPokemonNodeClicked,
  incrementCurrentPage,
  decrementCurrentPage,
  setDefaultPage,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
