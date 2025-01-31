import React, { useContext } from "react";
import { AppContext } from "./App";
import './Movies.css';

function MyFavorites() {
  const { favorites, toggleFavorite } = useContext(AppContext);

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">Favorite Movies:</h2>
      <div className="favorites-grid">
        {favorites.map((fav) => (
          <div key={fav.id} className="favorite-card">
            <img src={fav.image} alt={fav.title} className="favorite-image" />
            <div className="favorite-info">
              <h4 className="favorite-title">Name: {fav.title}</h4>
              <p className="favorite-genre">Genre: {fav.genre}</p>
              <p className="favorite-rating">Rating: {fav.rating}</p>
              <button onClick={() => toggleFavorite(fav)} className="remove-btn">
                Remove From Favorites
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyFavorites;
