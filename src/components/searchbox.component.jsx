import React from "react";

const SearchBox = ({ searchBoxProps }) => {
  return (
    <div className="">
      <input
        type="search"
        placeholder="search project..."
        onChange={searchBoxProps}
      />
    </div>
  );
};

export default SearchBox;
