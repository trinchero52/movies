import { useParams, Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import { Button, Col, Row } from "antd";
import "./MovieTrailer.scss";

export default function MovieTrailer() {
    const { id } = useParams();

    const [ movieInfo, setMovieInfo ] = useState({});


    useEffect(() => {
        obtenerDatos();
      }, []);
    
      const obtenerDatos = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d896e8ee95db1320e65111f06a2c925b&language=es-ES&page=1`
        );
        const movie = await response.json();
        setMovieInfo(movie.results[0]);
      };

      if (movieInfo.loading || !movieInfo) {
        return <Loading />;  
      }

      const keyvideo = movieInfo.key

    return (   <div className = "vista"> 
                <div>
                <Link to = {`/movie/${id}`} className="btn btn-dark" >
                    Volver atras
                </ Link>    
                </div>        
                <iframe
                width="853"
                height="505"
                src={`https://www.youtube.com/embed/${keyvideo}?rel=0;&autoplay=1`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                ></iframe>
               </div> )
    
}