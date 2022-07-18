import { Box, Grid } from "@mui/material";
import React, { FC, memo } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { changeNote } from "../service/noteService";
import { useAppSelector } from "../hook";

interface WorkSpaceProps {
  description: string | undefined;
}

const WorkSpace: FC<WorkSpaceProps> = memo(({ description }) => {
  const { idCurrentNote } = useAppSelector((state) => state);
  return (
    <Box width={"75%"} height={"100%"} marginTop={3}>
      <SimpleMDE
        onChange={(eve) =>
          idCurrentNote && changeNote(idCurrentNote, eve.toString())
        }
        value={description}
        style={{ height: "100%" }}
      />
    </Box>
  );
});

export default WorkSpace;
