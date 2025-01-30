function MovieList({ movies, onAddToFavorites}) {
  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <div className="movies-container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieDetails
              key={movie.id}
              movie={movie}
              onAddToFavorites={onAddToFavorites}
            />
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </div>
  );
}

export default MovieList;