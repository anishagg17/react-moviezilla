import { withRouter } from 'react-router-dom';
import React from 'react';
import Crousel from './Crousel';
import data from '../../constants/data';
import MovieFullView from './MovieFullView';

function MoviePage(props) {
  const movieId = props.match.params.id;
  const featuredMovies = data.data.filter(movie => movie.isFeatured === 'TRUE');
  const movie = data.data.filter(movie => movie['S.No.'] === movieId)[0];
  // console.log(movie);
  // console.log(featuredMovies);
  return (
    <>
      <Crousel featuredMovies={featuredMovies} />
      <MovieFullView movie={movie} />
    </>
  );
}

export default withRouter(MoviePage);
