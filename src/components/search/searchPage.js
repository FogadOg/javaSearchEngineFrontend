import React, { useState, useEffect } from 'react';
import SearchBar from './searchBar';
import SearchResult from './searchResult';
import { useParams } from 'react-router-dom';

function SearchPage() {
  const [websites, setWebsites] = useState([]);
  const {query} =useParams()
  
  console.log("query: ",query);

  
  useEffect(() => {
    fetch(`http://localhost:8080/search/${query}`)
      .then((res) => res.json())
      .then((data) => {
        setWebsites(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <SearchBar />
      <SearchResult websites={websites} />
    </>
  );
}

export default SearchPage;
