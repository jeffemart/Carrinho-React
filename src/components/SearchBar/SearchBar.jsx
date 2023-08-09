import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import './SearchBar.css';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <form className="search-bar">
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar"
        className="search__input"
        onChange={ ({target}) => setSearchValue(target.value) }
        required
      />

      <button type="submit" className="search__button" >
        <FiSearch />
      </button>
    </form>
  );
}

export default SearchBar;
