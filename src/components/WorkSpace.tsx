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
    height: "100vh",
    m: "30px 0 0 30px",
    // display: "flex",
    // justifyContent: "center",
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
