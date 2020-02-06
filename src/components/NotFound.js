import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  font-weight: 600;
  font-size: 1.1rem;

  margin-bottom: 1.5rem;
  outline: none;
  border-radius: 50rem;
  width: 6rem;
  padding: 0.4rem 0;
  border: 1px solid rgba(248, 220, 18, 1);
  color: rgba(248, 220, 18, 1);

  :hover {
    background-color: rgba(248, 220, 18, 1);
    border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
  }
`;

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  background-size: cover;
  min-height: 74vh;
  width: 100%;
  position: relative;
  top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 72px;
    margin: 0px 0 23px 0;
  }
  h2 {
    font-size: 22px;
    letter-spacing: 10px;
  }
  h2 a img {
    width: 180px;
    margin: 75px 0 -5px 0;
  }
`;

const NotFoundText = styled.div`
  #notfound {
    position: relative;
    height: 50vh;
    margin-top: 40px;
  }
  #notfound .notfound {
    position: relative;
    left: 50%;
    top: 40%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .notfound {
    max-width: 920px;
    width: 100%;
    line-height: 1.4;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
  }
  .notfound .notfound-404 {
    position: absolute;
    height: 100px;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: -1;
  }
  .notfound .notfound-404 h1 {
    color: #ececec;
    font-weight: 900;
    font-size: 276px;
    margin: 0px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .notfound h2 {
    font-size: 46px;
    color: #000;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0px;
  }
  @media only screen and (max-width: 480px) {
    .notfound .notfound-404 h1 {
      font-size: 162px;
    }
    .notfound h2 {
      font-size: 26px;
    }
  }
`;

const NotFound = () => {
  return (
    <Container>
      <NotFoundText>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>404</h1>
            </div>
            <h2>We are sorry, Page not found!</h2>
          </div>
        </div>
      </NotFoundText>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
