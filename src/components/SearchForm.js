import React from "react";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  // const handleInputChange = (event) => console.log(event.target.value);
  const handleInputChange = (event) => setSearchText(event.target.value);
  return (
    <div className="search-form">
      <input type="text" onChange={handleInputChange} value={searchText} />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;
