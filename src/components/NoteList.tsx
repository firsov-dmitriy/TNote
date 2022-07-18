import { Stack } from "@mui/material";
import React, { FC, memo, useState } from "react";
import { useAppSelector } from "../hook";
import NoteItem from "./NoteItem";

const NoteList: FC<{}> = memo(({}) => {
  const { notes, idCurrentNote } = useAppSelector((state) => state);

  const style = {
    stack: {
      overflowY: "auto",
      height: "85vh",
    },
  };

  return (
    <Stack sx={style.stack}>
      {notes.map((note, index) =>
        note.id === idCurrentNote ? (
          <NoteItem
            index={note.id}
            active={true}
            title={note.title}
            timeCreate={note.timeCreate}
            description={note.description}
            key={index}
          />
        ) : (
          <NoteItem
            index={note.id}
            active={false}
            title={note.title}
            timeCreate={note.timeCreate}
            description={note.description}
            key={index}
          />
        )
      )}
    </Stack>
  );
});

export default NoteList;
