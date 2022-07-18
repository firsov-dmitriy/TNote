import { Box, Grid } from "@mui/material";
import React, { FC, memo } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { changeNote } from "../service/noteService";
import { useAppSelector } from "../hook";

interface WorkSpaceProps {
  description: string | undefined;
}

const style = {
  box: {
    width: "75%",
    height: "100%",
    mt: 3,
  },
};

const WorkSpace: FC<WorkSpaceProps> = memo(({ description }) => {
  const { idCurrentNote } = useAppSelector((state) => state);
  return (
    <Box sx={style.box}>
      <SimpleMDE
        onChange={(eve) => changeNote(idCurrentNote, eve.toString())}
        value={description}
      />
    </Box>
  );
});

export default WorkSpace;
