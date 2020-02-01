import React from 'react';
import styled from 'styled-components';
import Ratings from 'react-ratings-declarative';

const Container = styled.div`
  width: 30vh;
`;

const Cover = styled.div`
  background: #ddd;
  border-radius: 0.3rem 0.3rem 0px 0px;
  height: 9rem;
`;

const Content = styled.div`
  height: 2rem;
  font-size: 0.9rem;

  margin-bottom: 1rem;
  border: 1px solid #eee;
  border-radius: 0px 0px 0.3rem 0.3rem;
  padding: 0rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;

  postion: relative;
  transition: all ease 2.5s;
  :hover {
    cursor: pointer;
    .full {
      display: flex;
    }
    .org {
      display: none;
    }
  }
`;

const Name = styled.div`
  font-weight: 600;
`;

const FullName = styled.div`
  display: none;
  position: absolute;
  z-index: 10;
  border: 1px solid #eee;
  border-radius: 0.3rem;
  padding: 0.2px 0.5rem;
  color: #52aaff;
  font-weight: 600;
  box-shadow: 0.2rem 0.2rem #eee;
  background: #fff;
`;

export default function MovieCard({ movie }) {
  const name = movie['Movie name'].toString();
  const ratings = parseInt(movie['Star rating']);

  return (
    <Container>
      <Cover />
      <Content>
        <Name className="org">
          {name.substr(0, 15)}
          {name.length >= 15 && '...'}
        </Name>
        <FullName className="full">{name}</FullName>
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
