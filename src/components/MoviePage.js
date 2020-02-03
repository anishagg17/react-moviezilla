import React from 'react';
import { withRouter } from 'react-router-dom';

function MoviePage(props) {
  const movieId = props.match.params.id;
  return <div>{movieId}</div>;
}

export default withRouter(MoviePage);
