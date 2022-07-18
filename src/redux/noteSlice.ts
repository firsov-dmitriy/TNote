import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IndexableType } from "dexie";
import { INote } from "../types/Note";

interface NoteState {
  readonly notes: INote[];
  readonly idCurrentNote: IndexableType | null;
}

const initialState: NoteState = {
  notes: [],
  idCurrentNote: null,
};

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {
    getAllNotes(state, action: PayloadAction<INote[]>) {
      state.notes = action.payload;
    },
    setIdCurrentNote(state, action: PayloadAction<number>) {
      state.idCurrentNote = action.payload;
    },
  },
});

export const { getAllNotes, setIdCurrentNote } = noteSlice.actions;
