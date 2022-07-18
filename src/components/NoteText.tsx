import { Box } from "@mui/material";
import { marked } from "marked";
import React, { FC } from "react";
import { INote } from "../types/Note";
import EditNote from "./EditNote";

interface NoteTextProps {
  note: INote | undefined;
  handlerEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = {
  box: {
    borderRadius: 5,
    border: "2px solid black",
    height: "80vh",
    m: 1,
    p: 2,
  },
};

const NoteText: FC<NoteTextProps> = ({ note, handlerEdit }) => {
  return (
    <Box>
      <EditNote handlerEdit={handlerEdit} />
      <Box sx={style.box}>{note && marked.parse(note.description)}</Box>
    </Box>
  );
};

export default NoteText;
