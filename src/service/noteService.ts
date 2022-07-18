import { IndexableType } from "dexie";
import { db } from "./../db";
import { INote } from "./../types/Note";
export const addNote = async ({ title, description, timeCreate }: INote) => {
  try {
    const id = await db.notes.add({
      title,
      description,
      timeCreate,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = async (key: IndexableType) => {
  try {
    const deletedNote = await db.notes.delete(key);
  } catch (error) {
    console.log(error);
  }
};

export const changeNote = async (key: IndexableType, value: string) => {
  try {
    const note = await db.notes.update(key, { description: value });
  } catch (error) {
    console.log(error);
  }
};
