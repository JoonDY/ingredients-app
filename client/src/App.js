import { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import DetailsPage from './routes/DetailsPage';
import LoginPage from './routes/LoginPage';
import SignupPage from './routes/SignupPage';
import { IngredientsContextProvider } from './context/IngredientsContext';
import { UserContextProvider } from './context/UserContext';
import PrivateRoute from './routes/PrivateRoute';
import { UserContext } from './context/UserContext';
import './App.css';

const App = () => {
  return (
    <UserContextProvider>
      <IngredientsContextProvider>
        <Router>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/ingredients/:id" component={DetailsPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
          </Switch>
        </Router>
      </IngredientsContextProvider>
    </UserContextProvider>
  );
};

export default App;
