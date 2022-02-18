import React, { memo, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
// import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultContentProvider";
import Loading from "./Loading";

const Results = () => {
  const { getResult, results, searchTerm, /* setSearchTerm */ isLoading } =
    useResultContext();

  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResult(`/image/q=${searchTerm}`);
      } else {
        getResult(`/search/q=${searchTerm}&num=100`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;
  console.log(results)
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="w-full md:w-2/5">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-base md:text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center item-center">
          {/* {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a
                className="sm:p-3 p-5"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image?.src} alt={title} loading="lazy" />
                <p className="w-36 break-words text-sm mt-2">{title}</p>
              </a>
            )
          )} */}
        </div>
      );
    case "/videos":
      return "VIDEOS";
    case "/news":
      return "NEWS";
    default:
      return "ERROR";
  }
};

export default memo(Results);
