import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = ({ background }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div
      style={{
        background: `${background || "white"}`,
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        height: "31px",
        fontSize: "16px",
        padding: "5px",
      }}
    >
      <SearchIcon fontSize="medium" style={{ paddingLeft: "5px" }} />
      <input
        style={{
          border: "none",
          outline: "none",
          width: "300px",
          fontSize: "16px",
          background: `${background || "white"}`,
        }}
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
    </div>
  );
};

export default Searchbar;
