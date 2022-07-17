import { db } from "./../db";
import { INote } from "./../types/Note";
export const addNote = async ({
  title,
  id,
  description,
  timeCreate,
}: INote) => {
  try {
    const note = await db.notes.add({
      title,
      id,
      description,
      timeCreate,
    });
    console.log(note);
  } catch (error) {
    console.log(error);
  }
};
