import React, { Component } from 'react';
import data from '../constants/data';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 5rem 4rem 2rem 4rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;

const Button = styled.button`
  font-weight: 600;
  font-size: 0.8rem;

  margin-bottom: 1.5rem;
  background-color: #eee;
  outline: none;
  border: none;
  border-radius: 50rem;
  width: 6rem;
  padding: 0.4rem 0;

  :hover {
    background-color: #fff;
    border: 1px solid rgba(248, 220, 18, 1);
    color: rgba(248, 220, 18, 1);
    cursor: pointer;
  }
`;

export default class Dashboard extends Component {
  state = {
    totalMovies: data.data,
    showTill: 9,
  };

  increaseCount = () => {
    const { totalMovies, showTill } = this.state;
    this.setState({
      showTill: Math.min(showTill + 9, totalMovies.length),
    });
  };

  render() {
    const { totalMovies, showTill } = this.state;
    let movies = totalMovies.slice(0, showTill);

    let movieGrid = movies.map((movie, index) => (
      <MovieCard movie={movie} key={index} />
    ));

    return (
      <Container>
        <Flex>{movieGrid}</Flex>
        {showTill < totalMovies.length && (
          <Button onClick={this.increaseCount}>Load more</Button>
        )}
      </Container>
    );
  }
}
