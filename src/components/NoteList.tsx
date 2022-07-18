import { Stack } from "@mui/material";
import { IndexableType } from "dexie";
import React, { FC, memo, useEffect, useState } from "react";
import { useAppSelector } from "../hook";
import { sortToSearch } from "../service/sortService";
import { INote } from "../types/Note";
import NoteItem from "./NoteItem";

const style = {
  stack: {
    overflowY: "auto",
    height: "70vh",
  },
};

const renderItem = (notes: INote[], idCurrentNote: IndexableType) => {
  return notes.map((note, index) =>
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
        index={note.id ? note.id : 0}
        active={false}
        title={note.title}
        timeCreate={note.timeCreate}
        description={note.description}
        key={index}
      />
    )
  );
};

const NoteList: FC<{}> = memo(({}) => {
  const { notes, idCurrentNote, searchValue } = useAppSelector(
    (state) => state
  );
  const [sortNotes, setSortNotes] = useState<INote[]>([]);

  useEffect(() => {
    setSortNotes(sortToSearch(notes, searchValue));
  }, [searchValue, notes]);

  return (
    <Stack sx={style.stack}>
      {!searchValue
        ? renderItem(notes, idCurrentNote)
        : renderItem(sortNotes, idCurrentNote)}
    </Stack>
  );
});

export default NoteList;
