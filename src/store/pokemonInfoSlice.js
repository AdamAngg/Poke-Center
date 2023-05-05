import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemonExtendedInfoArray: [],
  id: null,
  error: "",
  liked: false,
  loading: null,
};

export const fetchCurrentPokemon = createAsyncThunk(
  "pokemon/fetchCurrentPokemon",
  async (_, { getState }) => {
    const pokemon = await getState().pokemonReducer.pokemon;
    const pokemonSmallerArray = pokemon
      .filter((pokemon) =>
        pokemon.name.includes(getState().pokemonReducer.searchedPokemon)
      )
      .slice(0, 20);
    const urlsArray = pokemonSmallerArray.map((pokemon) => pokemon.url);
    const responses = await axios.all(urlsArray.map((url) => axios.get(url)));
    const results = responses.map((response) => response.data);
    return results;
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
export const { addID, emptyArr } = pokemonInfoSlice.actions;
export default pokemonInfoSlice.reducer;
