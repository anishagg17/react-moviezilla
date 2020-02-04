import React from 'react';
import styled from 'styled-components';
import Ratings from 'react-ratings-declarative';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
  width: 19rem;
  margin: 0px 1rem;
  @media screen and (max-width: 992px) {
  }
`;

const Cover = styled.div`
  width: 19rem;
  background: #ddd;
  border-radius: 0.5rem 0.5rem 0px 0px;
  height: 11rem;
`;

const Name = styled.div`
  color: #222;
  font-weight: 600;
  font-size: 0.7rem;
  background: #fff;
`;

const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0.5rem 0rem 0.5rem;
  height: 2rem;
  border: 1px solid #eee;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  :hover {
    cursor: pointer;
  }
`;
function CrouselMovieCard({ movie, history }) {
  const name = movie['Movie name'].toString();
  const ratings = parseInt(movie['Star rating']);

  const displayMovie = movieId => {
    history.push(`/movie/${movieId}`);
  };

  return (
    <Container>
      <Cover />
      <About onClick={() => displayMovie(movie['S.No.'])}>
        <Name>{name}</Name>
        <Ratings
          rating={ratings}
          widgetRatedColors="rgba(248,220,18,1)"
          widgetEmptyColors="#ddd"
          widgetDimensions="0.9rem"
          widgetSpacings="0px"
        >
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
        </Ratings>
      </About>
    </Container>
  );
}

export default withRouter(CrouselMovieCard);
