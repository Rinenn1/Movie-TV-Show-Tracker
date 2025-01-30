import React from "react";
import MovieList from "../components/MovieList";

const Watchlist = ({ watchlist, removeFromWatchlist }) => {
  return (
    <div>
      <h2>My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in your watchlist yet.</p>
      ) : (
        <MovieList movies={watchlist} removeFromWatchlist={removeFromWatchlist} watchlist={watchlist} />
      )}
    </div>
  );
};

export default Watchlist;
