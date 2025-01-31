import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./App";
import './Movies.css'

const Watchlist = () => {

  const { watchlist, removeFromWatchlist } = useContext(AppContext);

  return (
    <div>
      <h2>My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in your watchlist yet.</p>
      ) : (
        <div>
          {watchlist.map((movie) => (
            <div key={movie.id} className="movieDisplay">
              <img src={movie.image} className="image"/>
              <h2>{movie.title}</h2>
              <p>{movie.genre}</p>
              <p>Rating: {movie.rating}</p>
              <button onClick={() => removeFromWatchlist(movie.id)} className="btn">
                Remove from Watchlist
              </button>
              <Link to={`/moviedetails/${movie.id}`}>View Details </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;