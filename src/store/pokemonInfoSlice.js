import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { returnSlicedArray } from "../helpers/returnSlicedArray.helper";

const initialState = {
  pokemon: [],
  pokemonExtendedInfoArray: [],
  pokemonSpeciesArray: [],
  pokemonLikedArray: [],
  error: "",
  pokemonArrayLoading: null,
  extendedInfoArrayLoading: null,
  speciesArrayLoading: null,
};

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0") => {
    return await axios.get(url).then((Response) => Response.data.results);
  }
);
export const fetchCurrentPokemon = createAsyncThunk(
  "pokemon/fetchCurrentPokemon",
  async (_, { getState }) => {
    const pokemon = getState().pokemonInfoReducer.pokemon;

    const pokemonSmallerArray = returnSlicedArray(
      pokemon,
      getState().pokemonReducer.searchedPokemon,
      getState().pokemonReducer.currentPage,
      getState().pokemonReducer.itemsPerPage
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
    const pokemon = getState().pokemonInfoReducer.pokemon;
    const pokemonSmallerArray = returnSlicedArray(
      pokemon,
      getState().pokemonReducer.searchedPokemon,
      getState().pokemonReducer.currentPage,
      getState().pokemonReducer.itemsPerPage
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
          console.error("Error:", error);
          return { error: "Error 403" };
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
  reducers: {
    addLikedPokemon(state, action) {
      state.pokemonLikedArray.push({
        pokemonInfo: action.payload,
      });
    },
    deleteLikedPokemon(state, action) {
      state.pokemonLikedArray = state.pokemonLikedArray.filter(
        (obj) => obj.pokemonInfo.id !== action.payload
      );
    },
  },
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

    builder.addCase(fetchPokemon.pending, (state) => {
      state.pokemonArrayLoading = "true";
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.pokemonArrayLoading = "loaded";
      state.pokemon = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.pokemonArrayLoading = "false";
      state.pokemon = [];
      state.error = action.error.message;
    });
  },
});
export const { addLikedPokemon, deleteLikedPokemon } = pokemonInfoSlice.actions;
export default pokemonInfoSlice.reducer;
