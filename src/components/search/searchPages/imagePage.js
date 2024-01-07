import React, { useState, useEffect } from 'react';
import SearchHeader from '../searchHeader';
import { useParams } from 'react-router-dom';

function ImagePage() {
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
        <div className="images">
          {websites.map((website, index) => (
          <div key={index} className='image'>
            {website.images.map((image, imageIndex) => (
              <img key={imageIndex} src={image.src} alt={image.alt} />
            ))}
          </div>

          ))}
        </div>
    </>

  );
}

export default ImagePage;