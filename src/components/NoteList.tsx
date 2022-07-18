import { Stack } from "@mui/material";
import { IndexableType } from "dexie";
import React, { FC, memo, useEffect, useState } from "react";
import { useAppSelector } from "../hook";
import { INote } from "../types/Note";
import NoteItem from "./NoteItem";

const style = {
  stack: {
    overflowY: "auto",
    height: "85vh",
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
  const sortToSearch = (notes: INote[]): INote[] => {
    const tempArr: INote[] = [];
    const otherArr: INote[] = [];
    for (const note of notes) {
      if (note.title.toLocaleLowerCase().includes(searchValue)) {
        tempArr.push(note);
      } else {
        otherArr.push(note);
      }
    }
    return [...tempArr, ...otherArr];
  };
  useEffect(() => {
    setSortNotes(sortToSearch(notes));
  }, [searchValue]);

  console.log(searchValue, sortNotes);

  return (
    <Stack sx={style.stack}>
      {!searchValue
        ? renderItem(notes, idCurrentNote)
        : renderItem(sortNotes, idCurrentNote)}
    </Stack>
  );
});

export default NoteList;
