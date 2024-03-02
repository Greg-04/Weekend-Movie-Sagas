import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DetailsPage() {
  const movies = useSelector((store) => store.movies);
  const { id } = useParams();
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    const matchedMovies = movies.filter((movieItem) => {
      return movieItem.id === Number(id);
    });
    const movie = matchedMovies[0];
    setMovieData(movie);
  }, [id]);

  return (
    <main data-testid="movieDetails">
      <button data-testid="toList">
        <Link to="/">back to movie list </Link>
      </button>

      <h1>Details Page</h1>
      {movieData && (
        <>
          <div>
            <h3>{movieData.title}</h3>
            <img src={movieData.poster} alt={movieData.title} />
            <p>
              <b>Description:</b> {movieData.description}
            </p>
            <p>
              <b>Genre Names:</b> {movieData.genre_names}
            </p>
          </div>
        </>
      )}
    </main>
  );
}

export default DetailsPage;

{
  /* {/* <div data-testid="movieDetails">
  {movies.map((movie) => {
    return (
      <div data-testid="movieItem">
        <h3>{movie.title}</h3>
        <img src={movie.poster} alt={movie.title} />
        <p>
          <b>Description:</b> {movie.description}
        </p>
        <p>
          <b>Genre Names:</b> {movie.genre_names}
        </p>
        <p>{id}</p>
      </div>
    ); 
  })} 
</div>*/
}
/*


Details Page
[X] This view should show all details including ALL the genres for the selected movie, as well as the title, description, and poster image. Use Sagas and Redux to handle these requests and data.

[X] The details page must have a data-testid="movieDetails" attribute.

[X] The details page must have a "back to movie list" button, which should bring the user back to the Home/List Page.

[X] The "back to movie list" button must have a data-testid="toList" attribute.
*/
