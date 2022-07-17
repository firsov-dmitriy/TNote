import { configureStore } from "@reduxjs/toolkit";
import { noteSlice } from "./noteSlice";

export const store = configureStore({
  reducer: noteSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
