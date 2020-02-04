import React from 'react';
import styled from 'styled-components';
import Ratings from 'react-ratings-declarative';

const Cover = styled.div`
  background: #ddd;
  border-radius: 0.5rem 0.5rem 0px 0px;
  height: 21rem;
`;

export const Content = styled.div`
  height: 3rem;
  margin-bottom: 1rem;
  border: 1px solid #eee;
  border-radius: 0px 0px 0.5rem 0.5rem;
  padding: 0rem 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
`;

export const FullName = styled.div``;

const Container = styled.div`
  width: 48vw;
  margin: 3.2rem auto;
  font-size: 1rem;
`;

export default function MovieFullView(props) {
  const { movie } = props;

  const name = movie['Movie name'].toString();
  const ratings = parseInt(movie['Star rating']);
  return (
    <Container>
      <Cover />
      <Content>
        <FullName className="full">{name}</FullName>
        <div className="org">
          <Ratings
            rating={ratings}
            widgetRatedColors="rgba(248,220,18,1)"
            widgetEmptyColors="#ddd"
            widgetDimensions="1.2rem"
            widgetSpacings="0.1rem"
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
