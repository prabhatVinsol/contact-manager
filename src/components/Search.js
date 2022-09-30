import React from 'react';

function Search(props) {
  const { value, handleSearchInput } = props;
  const handleOnChange = (e) => {
    handleSearchInput(e.target.value);
  };
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Search;
