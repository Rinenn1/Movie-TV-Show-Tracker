import { useContext } from "react";
import { AppContext } from "./App";
import { useParams } from "react-router-dom";


export default function MovieDetail() {

  const { movies } = useContext(AppContext);

  const { id } = useParams();

  const movie = movies.find((m) => m.id.toString() === id);

  return (
    <div>
        <div className="display">
          <div>
            <img src={movie.image} className="image"/>
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