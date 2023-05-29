import { createSlice } from "@reduxjs/toolkit";
export const loadPokemonStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("pokemonState");
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return initialState;
  }
};
export const updatePokemonStateToLocalStorage = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("pokemonState", serializedState);
};
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
