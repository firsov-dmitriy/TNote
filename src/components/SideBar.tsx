import { Box, TextField } from "@mui/material";
import React, { FC, memo, useState } from "react";
import { useAppSelector } from "../hook";
import { INote } from "../types/Note";

import NoteList from "./NoteList";

interface SideBarProps {
  addNote: ({ id, title, description, timeCreate }: INote) => void;
}

const SideBar: FC<SideBarProps> = memo(({ addNote }) => {
  const [newNote, setNewNote] = useState("Новая заметка");
  const { length } = useAppSelector((state) => state.notes);
  const noteDate = new Date();

  const createNote = (
    eve: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    eve.preventDefault();
    setNewNote(eve.target.value);
  };
  return (
    <Box>
      <TextField
        variant="standard"
        value={newNote}
        onKeyDown={(eve) => {
          if (eve.key.toLowerCase() === "enter") {
            addNote({
              title: newNote,
              id: length + 1,
              description: "Нет описания",
              timeCreate: noteDate.getMonth() + "." + noteDate.getFullYear(),
            });
            setNewNote("Новая заметка");
            eve.target.blur();
          }
        }}
        onFocus={() => setNewNote(" ")}
        onBlur={() => setNewNote("Новая заметка")}
        onChange={(eve) => createNote(eve)}
        sx={{ margin: 3, width: "85%" }}
      ></TextField>
      <NoteList />
    </Box>
  );
});

export default SideBar;
