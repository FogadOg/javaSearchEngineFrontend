import React, { useState, useEffect } from 'react';
import '../../styles/search/searchResult.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useParams } from 'react-router-dom';
import ImagePage from './searchPages/imagePage';
import SearchPage from './searchPages/searchPage';
import Home from '../Home';
function SearchResult() {

  const [websites, setWebsites] = useState([]);
  const {query} =useParams()
  
  console.log("SearchResult query: ",query);

  
  useEffect(() => {
    fetch(`http://localhost:8080/search/${query}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWebsites(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  console.log(websites);

  return (
    <>

  
      
    </>
  );
}

export default SearchResult;
