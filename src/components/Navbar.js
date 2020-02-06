import React from 'react';
import styled from 'styled-components';
import { Link as _Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';

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

const Navbar = ({ logout, user, history }) => {
  // console.log('props Nav', value);
  const handelLogOut = () => {
    // console.log('history', history);
    history.push('/');
    logout();
  };
  return (
    <div>
      <Nav>
        <Link to={'/'}>Home</Link>
        {!user && <Link to={'/signup'}>Sign Up</Link>}
        {user && (
          <Link to={'/'} onClick={handelLogOut}>
            Log Out
          </Link>
        )}
      </Nav>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps, { logout })(Navbar));
