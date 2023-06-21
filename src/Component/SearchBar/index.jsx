import {IconButton, Paper} from "@mui/material";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";


export default function SearchBar() {
  const [value, setValue] = useState();

  function onSearchSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <Paper
        component={"Form"}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
        }}
        onSubmit={onSearchSubmit}
      >
        <input
          className="searchBar"
          placeholder="Search"
          value={value}
          onChange={() => setValue(e.target.value)}
        />
       <IconButton
       type="submit"
       sx = {{
        p:'10px',
        background:'rgba(0,0,0,0.04)',
        borderLeft:'1px solid #f2f2f2',
        color:'#000'
       }}
       >
      <AiOutlineSearch/>
       </IconButton>
      </Paper>
    </>
  );
}
