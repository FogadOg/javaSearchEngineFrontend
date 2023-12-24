import React, { useState,useEffect  } from 'react';
import '../../styles/search/searchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function SearchBar() {

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname.split('/search/')[1];
    setSearchQuery(currentPath || '');
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    window.history.replaceState(null, '', `/search/${query}`);
  };

  const clearSearchBar=()=>{
    setSearchQuery("")
    window.history.replaceState(null, '', `/search`);
  }

  const searchQueryFiltered=searchQuery.replace("%20", " ")

  return (
    <>
      <form className="searchBar">
        <input
          id="searchBar"
          placeholder="Search..."
          type="text"
          value={searchQueryFiltered}
          onChange={handleInputChange}
        />
        {searchQuery ? (
          <button onClick={clearSearchBar}>
            <CloseIcon fontSize='small' />

          </button>

        ) : (
          <></>
        )}
        <button type="submit">
          <SearchIcon className="searchButton" fontSize="medium" />
        </button>
      </form>
    </>
  );
}

export default SearchBar;
