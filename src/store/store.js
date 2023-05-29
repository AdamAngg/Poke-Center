import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./pokemonSlice";
import { pokemonInfoSlice } from "./pokemonInfoSlice";
import {
  loadPokemonStateFromLocalStorage,
  updatePokemonStateToLocalStorage,
} from "./pokemonSlice";
import {
  loadPokemonInfoStateFromLocalStorage,
  updatePokemonInfoStateToLocalStorage,
} from "./pokemonInfoSlice";

const pokemonInitialState = loadPokemonStateFromLocalStorage();
const pokemonInfoInitialState = loadPokemonInfoStateFromLocalStorage();

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: {
    pokemonReducer: pokemonSlice.reducer,
    pokemonInfoReducer: pokemonInfoSlice.reducer,
  },
  preloadedState: {
    pokemonReducer: pokemonInitialState,
    pokemonInfoReducer: pokemonInfoInitialState,
  },
});
store.subscribe(() => {
  const pokemonState = store.getState().pokemonReducer;
  const pokemonInfoState = store.getState().pokemonInfoReducer;

  updatePokemonStateToLocalStorage(pokemonState);
  updatePokemonInfoStateToLocalStorage(pokemonInfoState);
});
