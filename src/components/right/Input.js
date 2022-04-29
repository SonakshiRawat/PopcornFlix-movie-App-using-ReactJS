import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

const Input = (props) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const fetchSearch = async (e) => {
    e.preventDefault();
    setSearchText("");
  };

  function handle(e) {
    if (e.key === "Enter") {
      console.log(searchText);
      navigate(`/search/${searchText}`);
    }
  }
  return (
    <div className="searchBar">
      <form onSubmit={fetchSearch}>
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handle}
        />
      </form>
    </div>
  );
};

export default Input;
