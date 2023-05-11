import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemon: [],
  loading: null,
  error: "",
  currentlySelectedPokemon: null,
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
