
function MovieItem({ movie }) {

  const handleOnClick = (event) => {
    console.log('Test Image Click');
  };

  return (
    <div data-testid="movieItem">
      <h3>{movie.title}</h3>
      <img
        src={movie.poster}
        alt={movie.title}
        data-testid="toDetails"
        onClick={handleOnClick}
      />
    </div>
  );
}

export default MovieItem;
