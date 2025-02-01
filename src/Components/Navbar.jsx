import { NavLink } from "react-router-dom";
import { useState } from "react";
import './Movies.css';
import './NavBar.css';


function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <div>
      <nav className="links">
        <div>
          <NavLink to="/" className="nav-link">Movies</NavLink>
          <NavLink to="/watchlist" className="nav-link">Watchlist</NavLink>
          <NavLink to="/favorites" className="nav-link">Favorite ❤️</NavLink>
        </div>

        <div>
          <form onSubmit={handleSearch} className="search">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn">Search</button>
            <button type="button" onClick={handleClearSearch} className="btn">Clear</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
