import React, { useEffect, useState } from 'react';

import SearchBar from '../searchBar';
import SearchResult from '../searchResult';
import { useParams } from 'react-router-dom';
import SearchHeader from '../searchHeader';

function SearchPage() {
  const [websites, setWebsites] = useState([]);
  const {query} =useParams()
  
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

  return (
    <>
      <SearchHeader query={query}/>
      <div className="searchResults">
        {websites.length > 0 && websites[websites.length - 1]?.[0]?.searchTime && (
          <p>{websites[websites.length - 1][0].searchTime}</p>
        )}
        <ul>
          {websites.map((website, index) => (
            <li className='cite' key={index}>
              <a href={website.url}>
                <div className='citeContainerTop'>
                  {website.favicon && <img src={website.favicon} alt='website favicon'/>}
                  {website.pageName && <p className='PageName'>{website.pageName}</p>}
                </div>
                <div className='citeContainerBottom'>
                  <p className='pageTittle'>{website.pageTitle}</p>
                  <p className='pageContentInsight'>{website.content}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchPage;
