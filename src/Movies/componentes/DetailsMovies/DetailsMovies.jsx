import { useParams } from "react-router-dom";

import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import { Button, Col, Row } from "antd";
import "./DetailsMovies.scss";

export default function DetailsMovies(props) {
    const { id } = useParams();

    const [ movieInfo, setMovieInfo ] = useState({});


    useEffect(() => {
        obtenerDatos();
      }, []);
    
      const obtenerDatos = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=d896e8ee95db1320e65111f06a2c925b&language=es-ES&page=1`
        );
        const movie = await response.json();
        setMovieInfo(movie);
      };

      if (!movieInfo.genres) {
        return <Loading />;  
      }
    console.log("detailsMovies",movieInfo)

    return <RenderMovie movie={movieInfo}/>
    
}

function RenderMovie(props) {
    const { movie:{id, title, backdrop_path, overview, poster_path, genres} } = props;
    
    const backdropPath = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
    const posterPath =  `https://image.tmdb.org/t/p/w500${poster_path}`;
    
    return (
                    <PosterMovie image={posterPath} image2={backdropPath} title={title} overview={overview} genres={genres} />
            )
}

function PosterMovie(props) {
    const { image , image2, title, overview , genres} = props;

    return (<div className="imgDetails" style={{ backgroundImage: `url('${image2}')` }}> 
              <MovieInfo title={title} overview={overview} genres={genres} />
            </div>)
}

function MovieInfo(props) {
  const { title, overview , genres} = props;

  return(<div className="descripcion">
    <div className="titulo"><h1>{title}</h1></div>  
    <h3>{overview}</h3>
    <ul>
              {genres.map((g) => (
                  <li> {g.name}</li>
              ))}
              </ul> 
    <Button type="link">ver trailer</Button>
    
    </div>
    
    )
}