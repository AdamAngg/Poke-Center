import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./pokemonSlice";
import { pokemonInfoSlice } from "./pokemonInfoSlice";

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
});
