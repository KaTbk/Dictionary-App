import React, { useState } from "react";
import { SearchBarContainer } from "./SearchBar.styles";
import api from "../../services/api";

const SeartchBar = ({ setSearchResult }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleUrl = (input) => {
    return `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchValue === "") return;
    try {
      const result = await api(searchValue);
      setSearchResult(result);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <SearchBarContainer onSubmit={handleSubmit}>
        <input type="text" value={searchValue} onChange={handleChange} />
        <button>Search</button>
      </SearchBarContainer>
    </>
  );
};

export default SeartchBar;
