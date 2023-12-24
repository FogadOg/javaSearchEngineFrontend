// import React, { useState, useEffect } from 'react';
import SearchBar from './search/searchBar';
import "../styles/home.css"

import searchEngineLogo from "../static/images/searchEngineLogo.png"

function Home() {
  return (
    <div className='home'>
      <div className='homeCenterContainer'>
        <div className='logoContainer'>
          <img src={searchEngineLogo}/>
        </div>
        <SearchBar/>
        <h1>Tired Of Getting Good Search Results?</h1>
      </div>
    </div>

  );
}

export default Home;