import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./pokemonSlice";
import { pokemonInfoSlice } from "./pokemonInfoSlice";

export const store = configureStore({
  reducer: {
    pokemonReducer: pokemonSlice.reducer,
    pokemonInfoReducer: pokemonInfoSlice.reducer,
  },
});
