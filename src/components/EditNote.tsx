import { ButtonGroup, Button, TextField } from "@mui/material";
import React, { FC, memo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { setSeachValue } from "../redux/noteSlice";
import { deleteNote } from "../service/noteService";

interface EditNoteProps {
  handlerEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = {
  btnGroup: {
    display: "flex",
    mt: 2,
    justifyContent: "center",
  },
};

const EditNote: FC<EditNoteProps> = memo(({ handlerEdit }) => {
  const { idCurrentNote } = useAppSelector((state) => state);

  const hanldeRemoveNote = () => {
    const conf = window.confirm("Удалить ?");
    conf && deleteNote(idCurrentNote);
  };

  return (
    <ButtonGroup sx={style.btnGroup} aria-label="text button group">
      <Button color={"error"} onClick={hanldeRemoveNote}>
        Delete
      </Button>
      <Button onClick={() => handlerEdit(true)}>Edit</Button>
    </ButtonGroup>
  );
});

export default EditNote;
