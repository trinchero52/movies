import { useParams, Link } from "react-router-dom";

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

    return <RenderMovie movieInfo={movieInfo}/>
    
}

function RenderMovie(props) {
    const { movieInfo:{id, title, backdrop_path, overview, poster_path, genres} } = props;
    
    const backdropPath = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
    
    return (        <div className="imgDetails" style={{ backgroundImage: `url('${backdropPath}')` }}>
                    <Row>
                      <Col span={8} offset={3}>
                        <PosterMovie image={poster_path} title={title} overview={overview} genres={genres} id={id} />
                      </Col>
                    </Row>  
                    
                    </div>
            )
}

function PosterMovie(props) {
    const { image , image2, title, overview , genres, id} = props;
    const posterPath =  `https://image.tmdb.org/t/p/w500${image}`;

    return (<div className="imgDetails2" style={{ backgroundImage: `url('${posterPath}')` }}> 
              <MovieInfo title={title} overview={overview} genres={genres} id={id}/>
            </div>)
}

function MovieInfo(props) {
  const { title, overview , genres, id} = props;

  return(<div className="descripcion">
    <div className="titulo"><h1>{title}</h1></div>  
    
    <h4>{overview}</h4>
              <ul>
               <p>Generos: </p> 
              {genres.map((g) => (
                  <li key={g.id}> {g.name}</li>
              ))}
              </ul> 
    <Link to={`/movieTrailer/${id}`} className="btn btn-dark"> 
          trailer
    </Link>
    </div>
    
    )
}