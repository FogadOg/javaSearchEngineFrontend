import React, { useEffect } from 'react';
import './styles/style.css'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import SearchPage from './components/search/searchPages/searchPage';
import ImagePage from './components/search/searchPages/imagePage';
import Home from './components/Home';
import IndexMap from './components/indexMap';
import SearchResult from './components/search/searchResult';

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
            path="/Search/:query"
            element={<SearchPage/>}
          />
          <Route
            exact
            path="/images/:query"
            element={<ImagePage/>}
          />

          <Route
            exact
            path="*"
            element={<Navigate to="/"/>}
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