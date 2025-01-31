import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./App";
import './Movies.css'

const Watchlist = () => {

  const { watchlist, removeFromWatchlist } = useContext(AppContext);

  return (
    <div className="watchlist-container">
      <h2 className="watchlist-title">My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p className="empty-watchlist">No movies in your watchlist yet.</p>
      ) : (
        <div className="watchlist-grid">
          {watchlist.map((movie) => (
            <div key={movie.id} className="watchlist-card">
              <img src={movie.image} className="watchlist-image"/>
              <div className="watchlist-info">
                <h3 className="watchlist-movie-title">{movie.title}</h3>
                <p className="watchlist-genre">{movie.genre}</p>
                <p className="watchlist-rating">Rating: {movie.rating}/5</p>
                <button onClick={() => removeFromWatchlist(movie.id)} className="remove-watchlist-btn">
                  Remove from Watchlist
                </button>
                <Link to={`/moviedetails/${movie.id}`} className="view-details-link">View Details </Link>
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;