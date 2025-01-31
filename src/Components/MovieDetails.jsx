import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./App";
import './Movies.css';


export default function MovieDetail() {

  const { movies } = useContext(AppContext);

  const { id } = useParams();

  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return <p>Loading...</p>
  }

  return (
    <div>
        <div className="display-details">
          <div>
            <img src={movie.image} className="image" alt={movie.title}/>
          </div>
          <div>
            <p><strong>Type: </strong>{movie.type}</p>
            <p><strong>Genre: </strong>{movie.genre}</p>
            <p><strong>Duration: </strong>{movie.duration}</p>
            <p><strong>Rating: </strong>{movie.rating}</p>
          </div>
        </div>
    </div>
  )
}