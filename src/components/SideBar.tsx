import { Box, Paper, TextField } from "@mui/material";
import React, { FC, memo, useState } from "react";
import { useAppSelector } from "../hook";
import { INote } from "../types/Note";
import NoteList from "./NoteList";

interface SideBarProps {
  addNote: ({ id, title, description, timeCreate }: INote) => void;
}

const style = {
  input: {
    margin: 3,
    width: "85%",
  },
};
const SideBar: FC<SideBarProps> = memo(({ addNote }) => {
  const [newNote, setNewNote] = useState("");
  const { length } = useAppSelector((state) => state.notes);

  const handlerCreaterNote = (eve: React.KeyboardEvent<HTMLDivElement>) => {
    const noteDate = new Date();
    if (eve.key.toLowerCase() === "enter") {
      addNote({
        title: newNote,
        id: length + 1,
        description: "Нет описания",
        timeCreate: noteDate.getMonth() + "." + noteDate.getFullYear(),
      });
      setNewNote("");
      eve.target.blur();
    }
  };

  return (
    <>
      <TextField
        variant="standard"
        value={newNote}
        onKeyDown={handlerCreaterNote}
        label={"Создать заметку"}
        onChange={(eve) => setNewNote(eve.target.value)}
        sx={style.input}
      ></TextField>
      <NoteList />
    </>
  );
});

export default SideBar;
