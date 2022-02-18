import React from "react";
import { NavLink } from "react-router-dom";

const link = [
  { url: "/search", text: "🔎 All" },
  { url: "/images", text: "🖼 Images" },
  { url: "/videos", text: "📹 Videos" },
  { url: "/news", text: "📰 News" },
];

const Links = () => {
  return (
    <div className="mt-4 flex items-center justify-between sm:justify-around">
      {link.map(({ url, text }, index) => (
        <NavLink
          key={index}
          to={url}
          className="m-2 mb-0"
          activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
