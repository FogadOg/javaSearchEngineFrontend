import React, { useState,useEffect  } from 'react';
import '../../styles/search/searchBar.css';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';
import searchEngineLogoPrimary from "../../static/images/searchEngineLogoPrimary.png"

function SearchHeader({query}) {



  return (
    <header>
      <div className="topHeader">
        <div className="left">
          <img src={searchEngineLogoPrimary}/>
        </div>
        <div className="right">
          <div className="searchBarTopContainer">
            <SearchBar/>
          </div>
        </div>
      </div>
      <div className="bottomHeader">
        <div className="buttonContainer">
          <Link to={`/search/${query}`}>All</Link>
          <Link to={`/images/${query}`}>Images</Link>
          <Link>Map</Link>
        </div>
      </div>
    </header>
  );
}

export default SearchHeader;
