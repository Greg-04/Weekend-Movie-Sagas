import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import MovieItem from '../MovieItem/MovieItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <h1>Movies List</h1>
      <section className="movies">
        <Container className="container">
          <Box>
            <Grid
              container
              className="pizzaContainer"
              alignItems="center"
              justifyContent="center"
              gap={2}>
              {movies.map((movie) => (
                <Grid item xs={12} md={3} lg={3} key={movie.id}>
                  <Paper>
                    <MovieItem movie={movie} />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </section>
    </main>
  );
}

export default MovieList;
