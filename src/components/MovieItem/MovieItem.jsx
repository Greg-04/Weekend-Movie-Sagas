import { Link } from 'react-router-dom';

function MovieItem({ movie }) {
  return (
    <div data-testid="movieItem">
      <h3>{movie.title}</h3>
      <Link to="/detailsPage">
        <img src={movie.poster} alt={movie.title} data-testid="toDetails" />
      </Link>
    </div>
  );
}

export default MovieItem;
