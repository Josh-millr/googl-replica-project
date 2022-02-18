import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Links from "./Links";
import { useDebounce } from "use-debounce";


const Search = () => {
  return (
    <div>
      <p>Search</p>
      <Links />
    </div>
  );
};

export default Search;
