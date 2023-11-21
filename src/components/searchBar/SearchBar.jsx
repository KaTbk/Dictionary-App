import React, { useState } from "react";
import { SearchBarContainer } from "./SearchBar.styles";

const SeartchBar = ({ setSearchResult }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleUrl = (input) => {
    return `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") return;
    fetch(handleUrl(search))
      .then((response) => response.json())
      .then((data) => setSearchResult(data))
      .catch((err) => {
        console.log(err.message);
        setSearchResult("");
      });
  };

  return (
    <>
      <SearchBarContainer onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
        <button>Search</button>
      </SearchBarContainer>
    </>
  );
};

export default SeartchBar;
