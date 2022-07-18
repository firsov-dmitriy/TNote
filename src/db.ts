import Dexie, { Table } from "dexie";
import { INote } from "./types/Note";

export class MySubClassedDexie extends Dexie {
  notes!: Table<INote>;

  constructor() {
    super("myDBNote");
    this.version(1).stores({
      notes: "++id, title, description, timeCreate",
    });
  }
}

export const db = new MySubClassedDexie();
