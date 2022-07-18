import { INote } from "../types/Note";

export const sortToSearch = (notes: INote[], searchValue: string): INote[] => {
  const sortArr: INote[] = [];
  const tempArr: INote[] = [];
  for (const note of notes) {
    if (note.title.toLocaleLowerCase().includes(searchValue)) {
      sortArr.push(note);
    } else {
      tempArr.push(note);
    }
    //add condition to date and descriptio
  }
  return [...sortArr, ...tempArr];
};
