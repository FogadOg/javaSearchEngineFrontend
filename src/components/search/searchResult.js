import '../../styles/search/searchResult.css';

function SearchResult({websites}) {




  return (
    <div className="searchResults">
      {websites.length > 0 && websites[websites.length - 1]?.[0]?.searchTime && (
        <p>{websites[websites.length - 1][0].searchTime}</p>
      )}
      <ul>
        {websites.slice(0, -2).map((website, index) => (
          <li className='cite' key={index}>
            <a href={website.url}>
              <div className='citeContainerTop'>
                {website.favicon && <img src={website.favicon} alt='website favicon'/>}
                {website.pageName && <p className='PageName'>{website.pageName}</p>}
              </div>
              <div className='citeContainerBottom'>
                <p className='pageUrl'>{website.pageTitle}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
