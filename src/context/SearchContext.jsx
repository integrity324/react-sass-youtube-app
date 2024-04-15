import { useState } from "react";
import { createContext } from "react";
import React from "react";

export const SearchContext = createContext();

export const SearchContextProvider = (props) => {

  const [searchQuery, setSearcheuery] = useState({
    input:'',
    videos: []
  })

  const [showSpecialSearchBar, setShowSpecialSearchBar] = useState(false);

  return (
    <SearchContext.Provider 
      value={{ showSpecialSearchBar, setShowSpecialSearchBar, searchQuery, setSearcheuery }}
      {...props}
    />
  )

}

