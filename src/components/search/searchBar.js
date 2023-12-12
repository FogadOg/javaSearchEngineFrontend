import '../../styles/search/searchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import {
  Link
} from "react-router-dom";


function SearchBar() {

  return (
    <header>
      <div className='topHeader'>
        <div className="left">
          <h1>search</h1>
        </div>
        <div className="right">
          <div className='searchBarTopContainer'>
              <form className='searchBar'>
                <input input="text" id='searchBar'/>
                <button>
                  <SearchIcon/>
                </button>
              </form>
          </div>
        </div>
      </div>
      <div className='bottomHeader'>
        <div className='buttonContainer'>
          <Link to="/">All</Link>
          <Link to="/images">Images</Link>
          <Link>Map</Link>
        </div>

      </div>



    </header>

  );
}

export default SearchBar;