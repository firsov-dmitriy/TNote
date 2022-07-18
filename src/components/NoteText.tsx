import { Box } from "@mui/material";
import { marked } from "marked";
import React, { FC } from "react";
import { INote } from "../types/Note";
import EditNote from "./EditNote";

interface NoteTextProps {
  note: INote | undefined;
  handlerEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoteText: FC<NoteTextProps> = ({ note, handlerEdit }) => {
  return (
    <Box>
      <EditNote handlerEdit={handlerEdit} />
      <Box p={2}>{note && marked.parse(note.description)}</Box>
    </Box>
  );
};

export default NoteText;
