import { TextField } from "@mui/material";
import React, { memo, useState } from "react";
import { useAppDispatch } from "../hook";
import { setSeachValue } from "../redux/noteSlice";

const style = {
  input: {
    mt: 2,
  },
};

const SearchBox = memo(() => {
  const dispatch = useAppDispatch();
  const [searchValue, setValue] = useState<string>();

  const handlerChange = (eve: React.KeyboardEvent<HTMLDivElement>) => {
    if (eve.key === "Enter" && searchValue) {
      dispatch(setSeachValue(searchValue));
      setValue("");
    }
  };
  return (
    <>
      <TextField
        onChange={(eve) => setValue(eve.target.value)}
        onKeyDown={handlerChange}
        fullWidth
        label={"Search"}
        sx={style.input}
        value={searchValue}
      ></TextField>
    </>
  );
});

export default SearchBox;
