import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./App";
import './Movies.css';

export default function MovieDetail() {


  const { movies } = useContext(AppContext);

  const { id } = useParams();

/*   const movie = movies.find((m) => m.id.toString() === id);
 */
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`)
    .then((res) => res.json())
    .then(setMovie);
  }, [id]);

  if (!movie) {
    return <p className="loading">Loading...</p>
  }

  return (
    <div>
        <div className="movie-detail">

          <div className="image-container"> 
            <img src={movie.image} className="image" alt={movie.title}/>
          </div>
          <div className="info-container">
            <h1 className="movie-title">{movie.title}</h1>
            <p><strong>Type: </strong>{movie.type}</p>
            <p><strong>Genre: </strong>{movie.genre}</p>
            <p><strong>Duration: </strong>{movie.duration}</p>
            <p><strong>Rating: </strong>{movie.rating}</p>
          </div>
        </div>
    </div>
  )
}