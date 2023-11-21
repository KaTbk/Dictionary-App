import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import styled from "styled-components";
import WordDefinition from "./components/wordDefinition/WordDefinition";

const StyledMain = styled.main`
  padding: 24px;
`;

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const findAudioUrl = (obj) => {
    if (!obj) return null;
    let audioUrl = "";
    audioUrl = obj.phonetics.find((item) => item.audio.length > 0);
    return audioUrl ? audioUrl.audio : null;
  };

  const findMeaning = (obj) => {
    if (!obj) return null;
    let meanings = [];
    try {
      obj.forEach((item) => {
        meanings = [...meanings, ...item.meanings];
      });
    } catch (error) {
      console.log(error);
    }
    return meanings ? meanings : null;
  };

  return (
    <StyledMain>
      <SearchBar setSearchResult={setSearchResults} />
      {searchResults ? (
        <WordDefinition
          word={searchResults[0]?.word}
          phonetic={searchResults[0]?.phonetic}
          audio={findAudioUrl(searchResults[0])}
          title={searchResults?.title}
          message={searchResults?.message}
          meanings={findMeaning(searchResults)}
        />
      ) : (
        <h2>Search for a word to get started!</h2>
      )}
    </StyledMain>
  );
}

export default App;
