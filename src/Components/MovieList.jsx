import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./App";

function MovieList() {

  const { movies, addToWatchlist, watchlist = [], favorites, toggleFavorite } = useContext(AppContext);
  
  if (!movies.length) {
    return <p>Loading Movies...</p>;
  }

  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <div className="movies-display">
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
        </div>
          
      ))}
    </div>
  );
}

export default MovieList;