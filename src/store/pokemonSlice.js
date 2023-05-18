import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonNodeClicked: null,
  loading: null,
  Error: "",
  currentlySelectedPokemon: null,
  currentlySelectedPokemonExtendedInfo: null,
  searchedPokemon: "",
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
  },
});
export const {
  addCurrentPokemon,
  addSearchPokemon,
  addCurrentPokemonExtendedInfo,
  addLikedPokemon,
  deleteLikedPokemon,
  addPokemonNodeClicked,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
