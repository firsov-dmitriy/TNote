import React, { memo, useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import WorkSpace from "./components/WorkSpace";
import { Container, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import NoteText from "./components/NoteText";
import { db } from "./db";
import { useAppDispatch, useAppSelector } from "./hook";
import { getAllNotes } from "./redux/noteSlice";
import { addNote } from "./service/noteService";
import { useLiveQuery } from "dexie-react-hooks";
import SearchBox from "./components/SearchBox";

const style = {
  container: {
    flexWrap: "noWrap",
  },
};

const App = memo(() => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useAppDispatch();
  const { idCurrentNote } = useAppSelector((state) => state);
  const allNotes = useLiveQuery(() =>
    db.notes.toArray().then((notes) => {
      dispatch(getAllNotes(notes));
    })
  );
  const oneNote = useLiveQuery(async () => {
    const note = await db.notes.get(idCurrentNote);
    return note;
  }, [idCurrentNote]);

  useEffect(() => {
    setIsEdit(false);
  }, [idCurrentNote]);

  return (
    <>
      <CssBaseline />
      <Container>
        <SearchBox />
        <Grid container sx={style.container}>
          <Grid item xl={2}>
            <SideBar addNote={addNote} />
          </Grid>
          <Grid item lg={9} xl={9} md={9} xs={9}>
            {isEdit ? (
              <WorkSpace description={oneNote?.description} />
            ) : (
              oneNote && <NoteText note={oneNote} handlerEdit={setIsEdit} />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
});

export default App;
