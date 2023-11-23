import React, { useState } from "react";
import "./assets/styles/global.css";
import SearchBar from "./components/searchBar/SearchBar";
import styled from "styled-components";
import { findAudioUrl, findMeaning } from "./utils/helpers";
import WordCard from "./components/wordCard/WordCard";
import NavBar from "./components/navBar/NavBar";

const StyledMain = styled.main`
  padding: 24px;
  min-height: calc(100vh - 48px);
  background-color: ${({ theme }) => theme.bg.primary};
`;

function App({ toggleTheme, isDarkTheme }) {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <StyledMain>
      <NavBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <SearchBar setSearchResult={setSearchResults} />
      {searchResults ? (
        <WordCard
          word={searchResults[0]?.word}
          phonetic={searchResults[0]?.phonetic}
          audio={findAudioUrl(searchResults[0])}
          meanings={findMeaning(searchResults)}
          source={searchResults[0]?.sourceUrls[0]}
        />
      ) : null}
    </StyledMain>
  );
}

export default App;
