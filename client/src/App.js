import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import DetailsPage from './routes/DetailsPage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import { IngredientsContextProvider } from './context/IngredientsContext';
import './App.css';

const App = () => {
  return (
    <IngredientsContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ingredients/:id" component={DetailsPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </IngredientsContextProvider>
  );
};

export default App;
