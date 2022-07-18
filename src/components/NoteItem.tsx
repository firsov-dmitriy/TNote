import { Button, Card, Typography } from "@mui/material";
import React, { FC, memo } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { setIdCurrentNote } from "../redux/noteSlice";

interface NoteItemProps {
  title: string;
  description: string;
  active: boolean;
  timeCreate: string | undefined;
  index?: number | undefined;
}

const NoteItem: FC<NoteItemProps> = memo(
  ({ active, title, description, index, timeCreate }) => {
    const dispatch = useAppDispatch();
    const { idCurrentNote } = useAppSelector((state) => state);

    return (
      <Button
        id={`note-item-${index}`}
        onClick={() => {
          index && dispatch(setIdCurrentNote(index));
        }}
        fullWidth
        sx={{ color: "black" }}
        variant="text"
      >
        <Card sx={{ width: "100%", border: active ? "2px solid black" : null }}>
          <div>
            <Typography fontSize={18}>{title}</Typography>
            <Typography fontSize={10}>
              {description && description.slice(0, 15)} {timeCreate}
            </Typography>
          </div>
        </Card>
      </Button>
    );
  }
);

export default NoteItem;
