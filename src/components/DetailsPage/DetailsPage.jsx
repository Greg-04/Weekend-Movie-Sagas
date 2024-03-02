import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function DetailsPage() {
  const movies = useSelector((store) => store.movies);
  console.log('This is my movies', JSON.stringify(movies));

  return (
    <main>
      <button data-testid="toList">
        <Link to="/">back to movie list </Link>
      </button>

      <h1>Details Page</h1>

      <div data-testid="movieDetails">
        <p>Movie Details</p>
      </div>
    </main>
  );
}

export default DetailsPage;

/*
Details Page
[ ] This view should show all details including ALL the genres for the selected movie, as well as the title, description, and poster image. Use Sagas and Redux to handle these requests and data.

[X] The details page must have a data-testid="movieDetails" attribute.

[X] The details page must have a "back to movie list" button, which should bring the user back to the Home/List Page.

[X] The "back to movie list" button must have a data-testid="toList" attribute.
*/
