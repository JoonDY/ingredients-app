import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import DetailsPage from './routes/DetailsPage';
import LoginPage from './routes/LoginPage';
import SignupPage from './routes/SignupPage';
import { IngredientsContextProvider } from './context/IngredientsContext';
import { UserContextProvider } from './context/UserContext';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import './App.css';

const App = () => {
  return (
    <UserContextProvider>
      <IngredientsContextProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/ingredients/:id" component={DetailsPage} />
            <PublicRoute exact path="/login" component={LoginPage} />
            <PublicRoute exact path="/signup" component={SignupPage} />
          </Switch>
        </Router>
      </IngredientsContextProvider>
    </UserContextProvider>
  );
};

export default App;
