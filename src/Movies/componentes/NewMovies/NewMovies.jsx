import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Button } from 'react-bulma-components'
import PopularMovies from "../PopularMovies/PopularMovies"
import Home from "../Home/Home";

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

function NewMovies(){
    return (
        <div>
            <Button type="button" onClick={cargarHome}>
            Home
          </Button>
    
          <Button type="button" onClick={cargarNewMovies}>
            NewMovies
          </Button>
    
          <Button type="button" onClick={cargarPopularMovies}>
            PopularMovies
          </Button>
        </div>  
    )
} 

export default NewMovies;