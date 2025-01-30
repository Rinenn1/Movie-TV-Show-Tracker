import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== id));
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/movies">Movies</Link> | 
        <Link to="/add">Add Movie</Link> | 
        <Link to="/watchlist">Watchlist ({watchlist.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies movies={movies} addToWatchlist={addToWatchlist} watchlist={watchlist} />} />
        <Route path="/add" element={<AddMovie addMovie={addMovie} />} />
        <Route path="/watchlist" element={<Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />} />
      </Routes>
    </Router>
  );
}

export default App;
