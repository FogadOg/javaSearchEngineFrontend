import React, { useState, useEffect } from 'react';

function ImagePage() {
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
    <div className="images">
      {websites.map((website, index) => (
      <div key={index} className='image'>
        {website.images.map((image, imageIndex) => (
          <img key={imageIndex} src={image.src} alt={image.alt} />
        ))}
      </div>

      ))}
    </div>
  );
}

export default ImagePage;