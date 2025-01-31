import { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";

export const AppContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => {
      if (!prevWatchlist.some((m) => m.id === movie.id)) {
        return [...prevWatchlist, movie];
      }
    });
  };

  const removeFromWatchlist = (id) => {
    setWatchlist((prevWatchList) => 
      prevWatchList.filter((movie) => movie.id !== id)
    );
  };

  const updateMovieStatus = (id, statusType, value) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, [statusType]: value } : movie
      )
    );
  };

  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === movie.id)) {
        return prevFavorites.filter((fav) => fav.id !== movie.id)
      } else {
        return [...prevFavorites, movie];
      }
    })
  };

  const handleSearch = (e) => {
    setSearchQuery(searchQuery);
  };

// Filter movies based on the search query
const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <div>
      <AppContext.Provider value={{movies: filteredMovies, movies, setMovies, watchlist, addToWatchlist, removeFromWatchlist, updateMovieStatus, favorites, setFavorites, toggleFavorite}}>
        <Navbar onSearch={handleSearch}/>
        <Outlet />
      </AppContext.Provider>
    </div>
  );
}

export default App;
