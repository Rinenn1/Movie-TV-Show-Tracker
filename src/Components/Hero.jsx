import { NavLink } from "react-router-dom";
import './Movies.css'

export default function Hero() {
  return (
    <div>
        <h1 className="hero-text">Browse your Favorite Movies and TV Shows</h1>
        <NavLink to="/movies" className="hero-btns" >Movies</NavLink>
        <br/>
        <br />
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d4ec529b-c1ce-4d04-88fe-0b62261edc97/dg2pnh9-579e013f-2aa1-4a61-9739-febe23ef98c2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q0ZWM1MjliLWMxY2UtNGQwNC04OGZlLTBiNjIyNjFlZGM5N1wvZGcycG5oOS01NzllMDEzZi0yYWExLTRhNjEtOTczOS1mZWJlMjNlZjk4YzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5TErU7citcaie3lkMzgrQPMuXu1lGUZtk_AF0aQndlM" className="hero-image"/>
    </div>
  )
}
