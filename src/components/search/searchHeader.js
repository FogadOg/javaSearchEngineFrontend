import React, { useState,useEffect  } from 'react';
import '../../styles/search/searchBar.css';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';
import searchEngineLogo from "../../static/images/searchEngineLogo.png"

function SearchHeader() {



  return (
    <header>
      <div className="topHeader">
        <div className="left">
          <img src={searchEngineLogo}/>
        </div>
        <div className="right">
          <div className="searchBarTopContainer">
            <SearchBar/>
          </div>
        </div>
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
