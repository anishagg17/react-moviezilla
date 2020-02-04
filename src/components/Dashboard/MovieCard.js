import React from 'react';
import styled from 'styled-components';
import Ratings from 'react-ratings-declarative';
import { withRouter } from 'react-router-dom';
import { Content, Cover, Name, FullName } from '../Styles/Styles';

const Container = styled.div`
  width: ${props => (props.width ? props.width : '14')}rem;
  margin: 0px 1rem;
  @media screen and (max-width: 992px) {
    width: 13rem;
    margin-left: 1rem;
  }
`;

function MovieCard(props) {
  const { movie, history } = props;
  // console.log('width', width);
  const name = movie['Movie name'].toString();
  const ratings = parseInt(movie['Star rating']);

  const displayMovie = movieId => {
    history.push(`/movie/${movieId}`);
  };

  return (
    <Container>
      <Cover />
      <Content>
        <Name className="org">
          {name.substr(0, 15)}
          {name.length >= 15 && '...'}
        </Name>
        <FullName className="full" onClick={() => displayMovie(movie['S.No.'])}>
          {name}
        </FullName>
        <div className="org">
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
        </div>
      </Content>
    </Container>
  );
}
export default withRouter(MovieCard);
