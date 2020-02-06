import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import NavBar from './components/Navbar';
// import Dashboard from '/components/Dashboard/Dashboard';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound';
import MoviePage from './components/MoviePage/MoviePage';
import thunkMiddleware from 'redux-thunk';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// const center

function App() {
  // console.log(typeof NavBar);
  return (
    <Provider store={store}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/movie/:id" component={MoviePage} />
        <Route path="/" component={NotFound} />
      </Switch>
    </Provider>
  );
}

export default App;
