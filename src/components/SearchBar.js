import React, { Component } from 'react';
import styled from 'styled-components';
import _SearchIcon from '@material-ui/icons/Search';
import _HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  height: 10rem;
  width: 100vw;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.3) 70%,
      rgba(255, 255, 255, 0.3)
    ),
    url('https://thumbs.dreamstime.com/b/theater-spot-light-black-background-smoke-89406139.jpg')
      0rem -9rem repeat;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Input = styled.input`
  background: white;
  height: 1.5rem;
  width: 15rem;
  outline: none;
  //   text-align: center;
  padding: 0.2rem 2rem;
  border: 1px solid #ddd;
  border-radius: 50rem;
  color: #444;
  font-size: 0.8rem;
`;

const SearchIcon = styled(_SearchIcon)`
  margin-right: -2rem;
  z-index: 2;
  color: #ddd;
`;

const HighlightOffIcon = styled(_HighlightOffIcon)`
  margin-left: -2rem;
  z-index: 2;
  color: #ddd;
  cursor: pointer;
`;

class SearchBar extends Component {
  clearQuery = cb => {
    return cb({
      target: {
        value: '',
      },
    });
  };

  render() {
    const { onChangeQuery, query } = this.props;

    return (
      <Container>
        <SearchIcon />
        <Input
          placeholder="search bar"
          onChange={onChangeQuery}
          value={query}
        />
        <HighlightOffIcon onClick={() => this.clearQuery(onChangeQuery)} />
      </Container>
    );
  }
}
export default SearchBar;
