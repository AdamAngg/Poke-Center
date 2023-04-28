import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemonInfo: null,
  id: null,
  liked: false,
  loading: false,
  pokemonColor: [],
};

export const fetchCurrentPokemon = createAsyncThunk(
  "pokemon/fetchCurrentPokemon",
  (URL) => {
    return axios.get(URL).then((response) => response.data);
  }
);

export const pokemonInfoSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCurrentPokemon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCurrentPokemon.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemonInfo = action.payload;
      state.pokemonColor.push(action.payload.types[0].type.name);
      state.error = "";
    });
    builder.addCase(fetchCurrentPokemon.rejected, (state, action) => {
      state.loading = false;
      state.pokemonInfo = [];
      state.error = action.error.message;
    });
  },
});

export default pokemonInfoSlice.reducer;
