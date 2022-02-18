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
          className={(isActive) =>
            `m-2 mb-0 ${
              isActive
                ? "" //TODO: Properly implement the isActive state
                : "border-b-2 border-blue-700 pb-2 text-blue-700 dark:text-blue-300"
            }`
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
