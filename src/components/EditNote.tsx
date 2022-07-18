import { ButtonGroup, Button, TextField } from "@mui/material";
import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { setSeachValue } from "../redux/noteSlice";
import { deleteNote } from "../service/noteService";

interface EditNoteProps {
  handlerEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditNote: FC<EditNoteProps> = ({ handlerEdit }) => {
  const { idCurrentNote } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [serchValue, setValue] = useState<string>();

  const hanldeRemoveNote = () => {
    const conf = window.confirm("Удалить ?");
    conf && idCurrentNote && deleteNote(idCurrentNote);
  };
  return (
    <ButtonGroup
      sx={{ display: "flex", mt: 2, justifyContent: "center" }}
      aria-label="text button group"
    >
      <TextField
        onChange={(eve) => setValue(eve.target.value)}
        onKeyDown={(eve) => {
          if (eve.key === "Enter" && serchValue)
            dispatch(setSeachValue(serchValue));
        }}
        label={"Search"}
        sx={{ mr: 2 }}
      ></TextField>
      <Button color={"error"} onClick={hanldeRemoveNote}>
        Delete
      </Button>
      <Button onClick={() => handlerEdit(true)}>Edit</Button>
    </ButtonGroup>
  );
};

export default EditNote;
