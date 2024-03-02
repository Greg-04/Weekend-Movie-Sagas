import { Link } from 'react-router-dom';

function MovieItem({ movie }) {
  return (
    <div data-testid="movieItem">
      <h3>{movie.title}</h3>
      <Link to={`/detailsPage`}>
        <img src={movie.poster} alt={movie.title} data-testid="toDetails" />
      </Link>
    </div>
  );
}

export default MovieItem;

/*
[x] This view displays all of the movies in the movie database.

[X ] When a movie poster (<img> element) is clicked, a user should be brought to the details page.

[x] Each of the "movie items" on this page each must have a data-testid="movieItem" attribute.

[ X] Each of the movie items' posters (<img> elements) on this page must have a data-testid="toDetails" attribute.
*/
