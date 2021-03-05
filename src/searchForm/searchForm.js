import React from "react";

export function SearchForm() {
  return (
    <div>
      <form>
        <label for="search-term">
          <input id="search-term" type="text" name="search-term"></input>
        </label>
      </form>
    </div>
  );
}

export default SearchForm;
