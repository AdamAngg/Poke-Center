import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemon: [],
  loading: null,
  error: "",
  currentPokemon: null,
  searchPokemon: "",
};

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    return await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => response.data.results);
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addCurrentPokemon: (state, action) => {
      state.currentPokemon = action.payload;
    },
    addSearchPokemon: (state, action) => {
      state.searchPokemon = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPokemon.pending, (state) => {
      state.loading = "true";
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.loading = "loaded";
      state.pokemon = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.loading = "false";
      state.pokemon = [];
      state.error = action.error.message;
    });
  },
});
export const { addCurrentPokemon, addSearchPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
