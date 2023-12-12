import './styles/style.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import SearchPage from './components/search/searchPage';
import ImagePage from './components/search/imagePage';

function App() {

  return (
    <div>
      <Router>
        <Routes>

          <Route
            exact
            path="/"
            element={<SearchPage/>}
          />

          <Route
            exact
            path="/images"
            element={<ImagePage/>}
          />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;