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
        
    </div>
  )
}

export default MyFavorites;