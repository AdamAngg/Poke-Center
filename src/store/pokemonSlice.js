import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemon: [],
  pokemonLikedArray: [],
  loading: null,
  Error: "",
  currentlySelectedPokemon: null,
  currentlySelectedPokemonExtendedInfo: null,
  searchedPokemon: "",
};

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0") => {
    return await axios.get(url).then((Response) => Response.data.results);
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addCurrentPokemon: (state, action) => {
      state.currentlySelectedPokemon = action.payload;
    },
    addSearchPokemon: (state, action) => {
      state.searchedPokemon = action.payload;
    },
    addCurrentPokemonExtendedInfo: (state, action) => {
      state.currentlySelectedPokemonExtendedInfo = action.payload;
    },
    addLikedPokemon(state) {
      state.pokemonLikedArray.push({
        pokemonInfo: state.currentlySelectedPokemon,
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPokemon.pending, (state) => {
      state.loading = "true";
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.loading = "loaded";
      state.pokemon = action.payload;
      state.Error = "";
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.loading = "false";
      state.pokemon = [];
      state.Error = action.error.message;
    });
  },
});
export const {
  addCurrentPokemon,
  addSearchPokemon,
  addCurrentPokemonExtendedInfo,
  addLikedPokemon,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
