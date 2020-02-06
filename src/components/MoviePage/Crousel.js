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
    let { featuredMovies } = this.state;
    let totalMovies = featuredMovies.length,
      newMovie;
    if (order === -1) {
      newMovie = featuredMovies[totalMovies - 1];
      featuredMovies = featuredMovies.slice(0, totalMovies - 1);
      this.setState({
        featuredMovies: [newMovie, ...featuredMovies],
      });
    } else {
      newMovie = featuredMovies[0];
      featuredMovies = featuredMovies.slice(1, totalMovies);
      this.setState({
        featuredMovies: [...featuredMovies, newMovie],
      });
    }
  };

  render() {
    let { featuredMovies, start } = this.state;
    // console.log(featuredMovies);
    featuredMovies = featuredMovies.slice(start, start + 3);
    return (
      <Carousel>
        <Button onClick={() => this.rotateCrousel(-1)}>
          <ChevronLeftIcon />
        </Button>

        {featuredMovies.map(movie => (
          <CrouselMovieCard movie={movie} key={movie['S.No.']} />
        ))}

        <Button onClick={() => this.rotateCrousel(+1)}>
          <ChevronRightIcon />
        </Button>
      </Carousel>
    );
  }
}
export default Crousel;
