import { NavLink } from "react-router-dom";
import './Movies.css';

function Navbar() {


  return (
    <div className="links" >
        <div>
          <NavLink to="/" className="nav-link">Movies</NavLink>
          <NavLink to="/watchlist" className="nav-link">Watchlist</NavLink>
          <NavLink to="/favorites" className="nav-link">Favorite ❤️</NavLink>
        </div>
    </div>
  );
}

export default Navbar;
