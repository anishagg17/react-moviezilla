import React, { Component } from 'react';
import styled from 'styled-components';
import CrouselMovieCard from './CrouselMovieCard';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const Carousel = styled.div`
  width: 80vw;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  display: flex;
  wrap: no-wrap;
  * {
  }
`;

const Button = styled.button`
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1000rem;
  color: #ccc;
  border: 1px solid #ccc;
  outline: none;
  :hover {
    cursor: pointer;
    color: #ccc;
    border: 1px solid rgba(248, 220, 18, 1);
    color: rgba(248, 220, 18, 1);
  }
`;

class Crousel extends Component {
  state = {
    start: 0,
    featuredMovies: this.props.featuredMovies,
  };

  rotateCrousel = order => {
    this.setState({
      start: this.state.start + order,
    });
  };

  render() {
    let { featuredMovies, start } = this.state;
    let totalMovies = featuredMovies.length;
    console.log(totalMovies);
    featuredMovies = featuredMovies.slice(start, start + 3);
    return (
      <Carousel>
        {start !== 0 && (
          <Button onClick={() => this.rotateCrousel(-1)}>
            <ChevronLeftIcon />
          </Button>
        )}
        {featuredMovies.map(movie => (
          <CrouselMovieCard movie={movie} key={movie['S.No.']} />
        ))}
        {start !== totalMovies - 3 && (
          <Button onClick={() => this.rotateCrousel(+1)}>
            <ChevronRightIcon />
          </Button>
        )}
      </Carousel>
    );
  }
}
export default Crousel;
