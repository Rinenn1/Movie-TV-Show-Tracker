import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MovieDetail from "./MovieDetails";
import MovieList from "./MovieList";
import WatchList from "./WatchList";
import ErrorPage from "./ErrorPage"; 
import MyFavorites from "./MyFavorites";
import Hero from "./Hero";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Hero /> },
      {path: '/movies', element: <MovieList />},
      {path: "/moviedetails/:id", element: <MovieDetail />, errorElement: <ErrorPage />},
      { path: "/watchlist", element: <WatchList /> },
      {path: '/favorites', element: <MyFavorites />}
    ],
  },
]);