import React from 'react';
import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

const Nav = styled.div`
  background: linear-gradient(
    90deg,
    rgba(247, 207, 64, 1) 80%,
    rgba(248, 225, 18, 1)
  );
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  * {
    margin-right: 0.52rem;
  }
`;

const Link = styled(_Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  background: white;
  height: 2rem;
  width: 4rem;
  border-radius: 3rem;
  font-weight: 500;
  font-size: 0.8rem;
  :hover {
    color: rgba(248, 220, 18, 1);
    cursor: pointer;
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/signup'}>Sign Up</Link>
    </Nav>
  );
}
