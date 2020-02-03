import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import NavBar from './components/Navbar';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import MoviePage from './components/MoviePage';
// const center

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/signup" component={SignUp} />
        <Route path="/movie/:id" component={MoviePage} />
        <Route path="/" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
