import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DetailsPage() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <button>Home</button>
      <h1>Details Page</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default DetailsPage;

/*
Details Page
[ ] This view should show all details including ALL the genres for the selected movie, as well as the title, description, and poster image. Use Sagas and Redux to handle these requests and data.

[ ] The details page must have a data-testid="movieDetails" attribute.

[ ] The details page must have a "back to movie list" button, which should bring the user back to the Home/List Page.

[ ] The "back to movie list" button must have a data-testid="toList" attribute.
*/
