import React, { useState, useEffect } from "react";
import "./Home.scss";
import SliderMovies from "../SliderMovies/SliderMovies";
import ReactDOM from 'react-dom';
import { Button } from 'react-bulma-components'
import NewMovies from "../NewMovies/NewMovies";
import PopularMovies from "../PopularMovies/PopularMovies"

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  const cargarHome = () => {
    ReactDOM.render(
      <React.StrictMode>
        <Home />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  const cargarNewMovies = () => {
    ReactDOM.render(
      <React.StrictMode>
        <NewMovies />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  const cargarPopularMovies = () => {
    ReactDOM.render(
      <React.StrictMode>
        <PopularMovies />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=d896e8ee95db1320e65111f06a2c925b&language=es-ES&page=1`
    );
    const movies = await response.json();
    setMovieList(movies);
  };

  return (
    <div className="home"> 
      <Button type="button" onClick={cargarHome}>
        Home
      </Button>

      <Button type="button" onClick={cargarNewMovies}>
        NewMovies
      </Button>

      <Button type="button" onClick={cargarPopularMovies}>
        PopularMovies
      </Button>

      <SliderMovies movies={movieList} />
    </div>
  );
}