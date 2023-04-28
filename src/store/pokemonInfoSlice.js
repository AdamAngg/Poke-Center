import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemonInfo: null,
  id: null,
  liked: false,
  loading: false,
  pokemonColor: [],
  pokemonFoto: [],
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
  reducers: {
    addID(state, action) {
      state.id = action.payload;
    },
    emptyArr(state) {
      state.pokemonColor = [];
      state.pokemonFoto = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCurrentPokemon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCurrentPokemon.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemonInfo = action.payload;
      state.pokemonColor.push(action.payload.types[0].type.name);
      state.pokemonFoto.push(action.payload.sprites.front_default);
      state.error = "";
    });
    builder.addCase(fetchCurrentPokemon.rejected, (state, action) => {
      state.loading = false;
      state.pokemonInfo = [];
      state.error = action.error.message;
    });
  },
});
export const { addID, emptyArr } = pokemonInfoSlice.actions;
export default pokemonInfoSlice.reducer;
