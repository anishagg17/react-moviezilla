import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  height: 2.4rem;
  width: 100vw;
  background: #ddd;
  span {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  font-weight: 700;
  font-size: 0.8rem;
  margin-left: 1rem;
  background-color: #fff;
  outline: none;
  border: none;
  border-radius: 50rem;
  width: 5rem;
  padding: 0.4rem 0;

  :hover {
    border: 1px solid rgba(248, 220, 18, 1);
    color: rgba(248, 220, 18, 1);
    cursor: pointer;
  }
`;

class SortBar extends Component {
  render() {
    const { currentSort, onChangeSort } = this.props;
    // console.log('currentSort', currentSort);
    return (
      <Container>
        <span>Sort :</span>
        <Button onClick={() => onChangeSort('name')}>By Name</Button>
        <Button onClick={() => onChangeSort('year')}>By Year</Button>
        <Button onClick={() => onChangeSort('rating')}>By Rating</Button>
        {currentSort !== '' && (
          <Button onClick={() => onChangeSort('')}>Clear</Button>
        )}
      </Container>
    );
  }
}

export default SortBar;
