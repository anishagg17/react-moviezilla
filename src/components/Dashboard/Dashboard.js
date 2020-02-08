import React, { Component } from 'react';
import data from '../../constants/data';
import MovieCard from './MovieCard';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import SortBar from './SortBar';
import debounce from 'lodash.debounce';

const Flex = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 2rem auto;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-45%, 0%);
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
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

class InfiniteUsers extends Component {
  constructor(props) {
    super(props);

    // Sets up our initial state
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      users: [],
      totalMovies: data.data,
      moviesToDisplay: data.data,
      showTill: 30,
      query: '',
      sortBy: '',
    };

    window.onscroll = debounce(() => {
      const {
        loadMovies,
        state: { error, isLoading, hasMore },
      } = this;

      if (error || isLoading || !hasMore) return;

      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMovies();
      }
    }, 100);
  }

  componentWillMount() {
    this.loadMovies();
  }

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
    });
  };

  loadMovies = () => {
    const { showTill, moviesToDisplay } = this.state;

    this.setState({
      showTill: Math.min(showTill + 9, moviesToDisplay.length),
      hasMore:
        Math.min(showTill + 9, moviesToDisplay.length) !==
        moviesToDisplay.length,
      isLoading: false,
    });
  };

  render() {
    const { showTill, moviesToDisplay, sortBy, query } = this.state;
    let movies = moviesToDisplay.slice(0, showTill);

    let movieGrid = movies.map(movie => (
      <MovieCard movie={movie} key={movie['S.No.']} />
    ));

    return (
      <Container>
        <SearchBar onChangeQuery={this.changeQuery} query={query} />
        <SortBar onChangeSort={this.changeSort} currentSort={sortBy} />
        <Flex>{movieGrid}</Flex>
      </Container>
    );
  }
}
export default InfiniteUsers;
