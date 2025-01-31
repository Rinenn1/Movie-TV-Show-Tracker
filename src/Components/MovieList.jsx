import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./App";
import './Movies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function MovieList() {

  const { movies, addToWatchlist, watchlist, favorites, toggleFavorite, searchQuery, handleSearchChange } = useContext(AppContext);
  
  const filterMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  if (!movies.length) {
    return <p>Loading Movies...</p>;
  }

  if (!filterMovies.length) {
    return <p>No Movis Found!!</p>
  }

  return (
    <div>
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} />
        <input 
          type="text" 
          placeholder="Search for movies..." 
          onChange={handleSearchChange} 
        />
      </div>
      <h1>Movies</h1>
      <div className="movies-display">
      {filterMovies.map((movie) => (
          <div key={movie.id} className="movieDisplay">
            <img src={movie.image} className="image"/> 
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Rating: {movie.rating}</p>
            <button onClick={() => toggleFavorite(movie)} className="btn">
              {favorites.some((fav) => fav.id === movie.id) ? "Unfavorite 💔" : "Favorite ❤️"}
            </button>
            <button onClick={() => 
              watchlist.some((m) => m.id === movie.id)
              ? removeFromWatchlist(movie.id)
              : addToWatchlist(movie)
            } className="btn">
              {watchlist.some((m) => m.id === movie.id) ? "In Watchlist" : "Add to Watchlist"}
            </button>
            <Link to={`/moviedetails/${movie.id}`}>View Details </Link>
          </div>
        ))}
      </div>
        
    </div>
  );
}

export default MovieList;