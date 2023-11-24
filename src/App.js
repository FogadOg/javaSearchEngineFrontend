import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
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
    <div className="App">
      <h1>Websites</h1>
      <ul>
        {websites.map((website, index) => (
          <li>
            
            <a href={website.url}>{website.pageTitle}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;