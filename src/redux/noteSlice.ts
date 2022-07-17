import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../types/Note";
interface NoteState {
  notes: INote[];
}

const initialState: NoteState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {
    fetchAllNote(state, action: PayloadAction<INote[]>) {
      state.notes = action.payload;
    },
  },
});

export const { fetchAllNote } = noteSlice.actions;
