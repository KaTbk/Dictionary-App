import React, { useState } from "react";
import "./assets/styles/global.css";
import SearchBar from "./components/searchBar/SearchBar";
import styled from "styled-components";
import { findAudioUrl, findMeaning } from "./utils/helpers";
import WordCard from "./components/wordCard/WordCard";

const StyledMain = styled.main`
  padding: 24px;
`;

function App() {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <StyledMain>
      <SearchBar setSearchResult={setSearchResults} />
      {searchResults ? (
        <WordCard
          word={searchResults[0]?.word}
          phonetic={searchResults[0]?.phonetic}
          audio={findAudioUrl(searchResults[0])}
          meanings={findMeaning(searchResults)}
          source={searchResults[0]?.sourceUrls[0]}
        />
      ) : (
        <h2>Search for a word to get started!</h2>
      )}
    </StyledMain>
  );
}

export default App;
