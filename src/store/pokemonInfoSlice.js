import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { returnSlicedArray } from "../helpers/returnSlicedArray.helper";

const initialState = {
  pokemonExtendedInfoArray: [],
  error: "",
  pokemonLikedArray: [],
  loading: null,
};

export const fetchCurrentPokemon = createAsyncThunk(
  "pokemon/fetchCurrentPokemon",
  async (_, { getState }) => {
    const pokemon = await getState().pokemonReducer.pokemon;
    const pokemonSmallerArray = returnSlicedArray(
      pokemon,
      getState().pokemonReducer.searchedPokemon
    );
    const urlsArray = pokemonSmallerArray.map((pokemon) => pokemon.url);
    const responses = await axios.all(urlsArray.map((url) => axios.get(url)));
    const results = responses.map((response) => response.data);
    console.log(results);
    return results;
  }
);

export const pokemonInfoSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCurrentPokemon.pending, (state) => {
      state.loading = "true";
    });
    builder.addCase(fetchCurrentPokemon.fulfilled, (state, action) => {
      state.loading = "loaded";

      state.pokemonExtendedInfoArray = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCurrentPokemon.rejected, (state, action) => {
      state.loading = "false";
      state.pokemonInfo = [];
      state.error = action.error.message;
    });
  },
});
export const { addIdOfClickedOne } = pokemonInfoSlice.actions;
export default pokemonInfoSlice.reducer;
