import {useContext } from "react";
import { AppContext } from "./App";


function MyFavorites() {
  const { favorites, toggleFavorite } = useContext(AppContext);

  
  return (
    <div>
      <h2>Favorite Movies:</h2>
      <ul>
        {favorites.map((fav) => (
          <div key={fav.id}>
            <img src={fav.image} className="image"/>
            <h4>Name: {fav.title}</h4>
            <p>Genre: {fav.genre}</p>
            <p>Rating: {fav.rating}</p>
            <button onClick={() => toggleFavorite(fav)} className="btn">Remove From Favorites</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default MyFavorites;