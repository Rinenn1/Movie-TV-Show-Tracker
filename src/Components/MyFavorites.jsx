import React, {useState} from "react";


function MyFavorites() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    if (favorites.includes(movie)) {
      setFavorites(favorites.filter(fav => fav !== movie));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const movies = [
    {id: 1, title:},
    {id: 2, title:},
    { id: 3, title:},
  ];

  
  return (
    <div>
      <h1>My Favorites</h1>

      {/* Movie list */}
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <button onClick={() => toggleFavorite(movie.title)}>
              {favorites.includes(movie.title) ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        ))}
      </div>

      {/* Displaying favorite movies */}
      <h2>Favorite Movies:</h2>
      <ul>
        {favorites.map((fav, index) => (
          <li key={index}>{fav}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyFavorites;