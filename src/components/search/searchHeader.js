import React, { useState,useEffect  } from 'react';
import '../../styles/search/searchBar.css';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';

function SearchHeader() {



  return (
    <header>
      <div className="topHeader">
        <div className="left">
          <div className="searchBarTopContainer">
            <SearchBar/>
          </div>
        </div>
        <div className="right"></div>
      </div>
      <div className="bottomHeader">
        <div className="buttonContainer">
          <Link to="/">All</Link>
          <Link to="/images">Images</Link>
          <Link>Map</Link>
        </div>
      </div>
    </header>
  );
}

export default SearchHeader;
