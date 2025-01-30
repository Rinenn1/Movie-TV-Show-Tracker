import React from "react";

function MovieList({ movies, updateMovieStatus }) {
  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.genre}</p>
          <p>Rating: {movie.rating}</p>
          <button onClick={() => updateMovieStatus(movie.id, "isFavorite", !movie.isFavorite)}>
            {movie.isFavorite ? "Unfavorite" : "Favorite"}
          </button>
          <button onClick={() => updateMovieStatus(movie.id, "isInWatchlist", !movie.isInWatchlist)}>
            {movie.isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
