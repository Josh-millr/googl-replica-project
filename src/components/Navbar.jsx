import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="flex flex-wrap items-center justify-center border-b border-gray-200 p-5 pb-0 dark:border-gray-700 sm:justify-between">
      <div className="item-center flex w-screen justify-between space-x-5">
        <Link to="/">
          <p className="rounded bg-blue-500 py-1 px-2 text-2xl font-bold text-white dark:bg-gray-500 dark:text-gray-900">
            Googl 🔎
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="rounded-full border bg-white px-2 py-1 text-xl hover:shadow-lg dark:bg-gray-50 dark:text-gray-900"
        >
          {darkTheme ? "Light 💡" : "Dark 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
