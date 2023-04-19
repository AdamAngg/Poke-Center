import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemon: [],
  loading: false,
  error: "",
  bu: 1,
};

export const fetchPokemon = createAsyncThunk("pokemon/fetchPokemon", () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then((response) => response.data);
});

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    reduce(state) {
      state.bu -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemon = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.loading = false;
      state.pokemon = [];
      state.error = action.error.message;
    });
  },
});
export default pokemonSlice.reducer;
