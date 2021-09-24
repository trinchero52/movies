import React from "react";

import "./Movie.scss"
// const Movie = (id, movie) => {
//     const imagen = movie.backdrop_path;
//     const description = movie.overview;
//     return (
//         <div>
//             <img src={imagen} />
//             <p>{description}</p>
//         </div>
//     );
// };

function Movie(props) {
    const {
        movie: { id, backdrop_path, title, overview },
    } = props;
    const backdropPath = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
    return (
      <div>  
        <div
            className="movie"
            style={{ backgroundImage: `url('${backdropPath}')` }}
        >   
            <div className="movieInfo">
              <div>
                 <h2>{title}</h2>
                 <p>{overview}</p>
              </div>
            </div>        
        </div>    
      </div>          
    )
}

export default Movie;