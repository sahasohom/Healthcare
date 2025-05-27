import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="search-section">
      <div className="left-search-section">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" name="search" id="search" placeholder="Search" />
      </div>
      <div className="right-search-section">
        <FontAwesomeIcon icon={faBell} className="notification-icon"/>
      </div>
    </div>
  );
};

export default Search;
