

function Navbar() {
  return (
    <div>
       <nav>
          <NavLink to="/" className="nav-link">Movies</NavLink>
          <NavLink to="/watchlist" className="nav-link">Watchlist</NavLink>
          <NavLink to="/favorites" className="nav-link">Favorite</NavLink>

        </nav> 
    </div>
  )
}

export default Navbar