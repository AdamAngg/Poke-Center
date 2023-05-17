import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { returnSlicedArray } from "../helpers/returnSlicedArray.helper";

const initialState = {
  pokemonExtendedInfoArray: [],
  pokemonSpeciesArray: [],
  error: "",
  extendedInfoArrayLoading: null,
  speciesArrayLoading: null,
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

    return results;
  }
);
export const fetchSpecies = createAsyncThunk(
  "pokemon/fetchSpecies",
  async (_, { getState }) => {
    const pokemon = getState().pokemonReducer.pokemon || [];
    const pokemonSmallerArray = returnSlicedArray(
      pokemon,
      getState().pokemonReducer.searchedPokemon
    );
    const urlsArray = pokemonSmallerArray.map(
      (pokemon) => "https://pokeapi.co/api/v2/pokemon-species/" + pokemon.name
    );

    const responses = await axios.all(
      urlsArray.map(async (url) => {
        try {
          const response = await axios.get(url);
          return response.data;
        } catch (error) {
          console.error("Błąd żądania:", error);
          return { error: "Błąd 403 - Odmowa dostępu" };
        }
      })
    );

    const results = responses.filter((result) => !result.error);

    return results;
  }
);

export const pokemonInfoSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCurrentPokemon.pending, (state) => {
      state.extendedInfoArrayloading = "true";
    });
    builder.addCase(fetchCurrentPokemon.fulfilled, (state, action) => {
      state.extendedInfoArrayloading = "loaded";
      state.pokemonExtendedInfoArray = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCurrentPokemon.rejected, (state, action) => {
      state.extendedInfoArrayloading = "false";
      state.pokemonExtendedInfoArray = [];
      state.error = action.error.message;
    });

    builder.addCase(fetchSpecies.pending, (state) => {
      state.speciesArrayLoading = "true";
    });
    builder.addCase(fetchSpecies.fulfilled, (state, action) => {
      state.speciesArrayLoading = "loaded";
      state.pokemonSpeciesArray = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSpecies.rejected, (state, action) => {
      state.speciesArrayLoading = "false";
      state.pokemonSpeciesArray = [];
      state.error = action.error.message;
    });
  },
});

export default pokemonInfoSlice.reducer;
