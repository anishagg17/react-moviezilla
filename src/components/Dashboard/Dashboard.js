import React, { Component } from 'react';
import data from '../../constants/data';
import MovieCard from './MovieCard';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import SortBar from './SortBar';
import Icon from '@material-ui/core/Icon';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 2rem 4rem 2rem 4rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
  .xbtn {
    color: grey;
  }
`;

const Button = styled.button`
  font-weight: 600;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  background-color: #eee;
  outline: none;
  border: none;
  border-radius: 50rem;
  width: 7.8rem;
  padding: 0.4rem 0.3rem;

  :hover {
    background-color: #fff;
    border: 1px solid rgba(248, 220, 18, 1);
    color: rgba(248, 220, 18, 1);
    cursor: pointer;
    .xbtn {
      color: rgba(248, 220, 18, 1);
    }
  }
`;

export default class Dashboard extends Component {
  state = {
    totalMovies: data.data,
    moviesToDisplay: data.data,
    showTill: 9,
    query: '',
    sortBy: '',
  };

  increaseCount = () => {
    const { showTill, moviesToDisplay } = this.state;
    this.setState({
      showTill: Math.min(showTill + 9, moviesToDisplay.length),
    });
  };

  changeQuery = e => {
    const { totalMovies } = this.state,
      query = e.target.value.toLowerCase();

    const moviesToDisplay = totalMovies.filter(movie => {
      let name = movie['Movie name'].toLowerCase();
      // console.log(name);
      return name.includes(query);
    });

    this.setState({
      query,
      showTill: Math.min(9, moviesToDisplay.length),
      moviesToDisplay,
    });
    // console.log(this.state);
  };

  changeSort = val => {
    let moviesToDisplay = [...this.state.moviesToDisplay];
    const { totalMovies } = this.state;
    switch (val) {
      case 'name':
        moviesToDisplay = moviesToDisplay.sort(function(
          // eslint-disable-next-line
          { ['Movie name']: a },
          // eslint-disable-next-line
          { ['Movie name']: b },
        ) {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        break;

      case 'year':
        moviesToDisplay = moviesToDisplay.sort(function(
          { Year: a },
          { Year: b },
        ) {
          return parseInt(b) - parseInt(a);
        });
        break;

      case 'rating':
        moviesToDisplay = moviesToDisplay.sort(function(
          // eslint-disable-next-line
          { ['Star rating']: a },
          // eslint-disable-next-line
          { ['Star rating']: b },
        ) {
          return parseInt(b) - parseInt(a);
        });
        break;

      default:
        moviesToDisplay = totalMovies;
        break;
    }

    this.setState({
      sortBy: val,
      moviesToDisplay,
      showTill: 9,
    });
  };

  render() {
    const { showTill, moviesToDisplay, sortBy, query } = this.state;
    let movies = moviesToDisplay.slice(0, showTill);

    let movieGrid = movies.map((movie, index) => (
      <MovieCard movie={movie} key={movie['S.No.']} />
    ));

    return (
      <Container>
        <SearchBar onChangeQuery={this.changeQuery} query={query} />
        <SortBar onChangeSort={this.changeSort} currentSort={sortBy} />
        <Flex>{movieGrid}</Flex>
        {showTill < moviesToDisplay.length && (
          <Button onClick={this.increaseCount}>
            <span>Load {moviesToDisplay.length - showTill} more</span>
            <Icon
              className="fa fa-plus-circle xbtn"
              // style={{ color: yellow[500] }}
            />
          </Button>
        )}
      </Container>
    );
  }
}
