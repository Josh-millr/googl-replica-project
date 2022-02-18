import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

import { useResultContext } from "../contexts/ResultContentProvider";
import { NavLink } from "react-router-dom";
import Links from "./Links";

// import Loading from "./Loading";

const Search = () => {
  const [text, setText] = useState("wizkid");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative mt-3 sm:ml-48 sm:-mt-10 md:ml-72">
      <input
        value={text}
        type="text"
        className="h-10 w-80 rounded-full p-6 text-black shadow-sm outline-none hover:shadow-lg dark:bg-gray-200 sm:w-96"
        plackholder="type url"
        onChange={(e) => setText(e.target.value)}
      />
      {!text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => setText("")}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
