import { List, Avatar } from 'antd';
import Loading from '../Loading/Loading';
import "./ListMovies.scss"

function ListMovies(props) {
  const {movies} = props 

  if (movies.loading || !movies.results) {
    return <Loading />;  
  }

  const results = movies.results  

return (
  <div className = "listMovies">
  <List
    itemLayout="horizontal"
    dataSource={results}
    renderItem={movie => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />}
          title={<p>{movie.title}</p>}
          description={movie.overview}
        />
      </List.Item>
    )}
  />
  </div>
);

}
export default ListMovies;