import React, { useContext } from "react";
import { AppContext } from "./App";
import './MyFavorites.css';

function MyFavorites() {
  const { favorites, toggleFavorite } = useContext(AppContext);

  return (
    <div>
      <h2>Favorite Movies:</h2>
      <ul>
        {favorites.map((fav) => (
          <div key={fav.id}>
            <img src={fav.image} className="image" alt={fav.title} />
            <h4>Name: {fav.title}</h4>
            <p>Genre: {fav.genre}</p>
            <p>Rating: {fav.rating}</p>
            <button onClick={() => toggleFavorite(fav)} className="btn">
              Remove From Favorites
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default MyFavorites;
