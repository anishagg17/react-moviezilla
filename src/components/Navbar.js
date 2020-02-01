import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

const Nav = styled.div`
  background: linear-gradient(
    90deg,
    rgba(247, 207, 64, 1) 80%,
    rgba(248, 225, 18, 1)
  );
  height: 3rem;
  display: grid;
  align-items: center;
  position: relative;
`;

export default function NavBar() {
  return <Nav>{/* <SearchIcon /> */}</Nav>;
}
