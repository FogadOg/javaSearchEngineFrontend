import React, { useState, useEffect } from 'react';
import '../../styles/search/searchResult.css';
function SearchResult() {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((data) => {
        setWebsites(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  console.log(websites);

  return (

    <div className="searchResults">
    <ul>
        {websites.map((website, index) => (
        <li className='cite'>
            <a href={website.url}>
            <div className='citeContainerTop'>
                <img src={website.favicon} alt='website favicon'/>
                <p className='PageName'>{website.pageName}</p>

            </div>
            <div className='citeContainerBottom'>
                <p className='pageUrl' href={website.url}>{website.pageTitle}</p>

            </div>
            </a>

            
        </li>
        ))}
    </ul>
    </div>
  );
}

export default SearchResult;