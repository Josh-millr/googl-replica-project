import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseURL = "https://google-search3.p.rapidapi.com/api/v1";

const ResultContentProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("tesla");

  const getResult = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseURL}${type}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "2dd8e8ea38msh09b29c83b63b77ap18a346jsnd63922c98f28",
      },
    });
    const data = await response.json();

    setResults(data);
    setIsLoading(false);
  };
  return(
    <ResultContext.Provider value={{ getResult, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  )
};
export const useResultContext = () => useContext(ResultContext)
export default ResultContentProvider;