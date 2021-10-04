import logo from './logo.svg';
import './App.css';
import Home from "./Movies/componentes/Home/Home";
import DetailsMovies from './Movies/componentes/DetailsMovies/DetailsMovies';
import NewMovies from "./Movies/componentes/NewMovies/NewMovies";
import PopularMovies from "./Movies/componentes/PopularMovies/PopularMovies";
import { Footer } from 'react-bulma-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import MovieTrailer from './Movies/componentes/MovieTrailer/MovieTrailer';


function App() {
  return (
    <Router>
      <div className="Container mt-5">
      <div className="btn-group">
        <Link to="/" className="btn btn-dark"> 
          Home
        </Link>
        <Link to="/newMovies" className="btn btn-dark"> 
          NewMovies
        </Link>
        <NavLink to="/popularMovie" className="btn btn-dark" activeClassName="active"> 
          PopularMovies
        </NavLink>
      </div>
      <hr/>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/newMovies" >
            <NewMovies />
          </Route>
          <Route path="/popularMovie" >
            <PopularMovies />
          </Route>
          <Route path="/movie/:id"exact={true}>
            <DetailsMovies />
          </Route>
          <Route path="/movieTrailer/:id"exact={true}>
            <MovieTrailer />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );

}

export default App;
