import React, { useEffect } from 'react';
import './styles/style.css'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import SearchPage from './components/search/searchPages/searchPage';
import ImagePage from './components/search/searchPages/imagePage';
import Home from './components/Home';
import IndexMap from './components/indexMap';

function App() {

  return (
    <div>
      <Router>
        <Routes>

          <Route
            exact
            path="/"
            element={<Home/>}
          />

          <Route
            exact
            path="/search/:query"
            element={<SearchPage/>}
          />

          <Route
            exact
            path="/images"
            element={<ImagePage/>}
          />

          <Route
            exact
            path='/index/view'
            element={<IndexMap/>}
          />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;