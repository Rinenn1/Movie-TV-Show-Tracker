import React, {useState} from "react";


function MyFavorites() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    if (favorites.includes(movie)) {

    }
  };

  return (
    <div>
        
    </div>
  )
}

export default MyFavorites;