import { Box } from "@mui/material";
import { marked } from "marked";
import React, { FC, memo } from "react";
import { INote } from "../types/Note";
import EditNote from "./EditNote";

interface NoteTextProps {
  note: INote;
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

const NoteText: FC<NoteTextProps> = memo(({ note, handlerEdit }) => {
  return (
    <Box>
      <EditNote handlerEdit={handlerEdit} />
      <Box sx={style.box}>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(note.description),
          }}
          id="rootNote"
        ></div>
      </Box>
    </Box>
  );
});

export default NoteText;
