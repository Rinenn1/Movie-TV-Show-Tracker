import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function MovieDetail() {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
    .then((res) => res.json())
    .then(setMovie);
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>
  }

  return (
    <div>
        <div className="display">
          <div>
            <img src={movie.image} className="image" alt={movie.title}/>
          </div>
          <div>
            <p><strong>Type: </strong>{movie.type}</p>
            <p><strong>Genre: </strong>{movie.genre.join(", ")}</p>
            <p><strong>Duration: </strong>{movie.duration}</p>
            <p><strong>Rating: </strong>{movie.rating}</p>
          </div>
        </div>
    </div>
  )
}