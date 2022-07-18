import { ButtonGroup, Button } from "@mui/material";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { deleteNote } from "../service/noteService";

interface EditNoteProps {
  handlerEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditNote: FC<EditNoteProps> = ({ handlerEdit }) => {
  const { idCurrentNote } = useAppSelector((state) => state);

  const hanldeRemoveNote = () => {
    const conf = window.confirm("Удалить ?");
    conf && idCurrentNote && deleteNote(idCurrentNote);
  };
  return (
    <ButtonGroup
      sx={{ display: "flex", mt: 2, justifyContent: "center" }}
      aria-label="text button group"
    >
      <Button color={"error"} onClick={hanldeRemoveNote}>
        Delete
      </Button>
      <Button onClick={() => handlerEdit(true)}>Edit</Button>
    </ButtonGroup>
  );
};

export default EditNote;
