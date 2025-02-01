// WatchList.jsx
import React from 'react';
import './WatchList.css';

const WatchList = ({ movies, removeFromWatchlist }) => {
  return (
    <div className="watchlist-container">
      <h2>Your Watchlist</h2>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id} className="watchlist-movie">
            <img src={movie.poster} alt={movie.title} />
            <div className="title">{movie.title}</div>
            <button
              className="remove-btn"
              onClick={() => removeFromWatchlist(movie.id)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No movies in your watchlist!</p>
      )}
    </div>
  );
};

export default WatchList;
