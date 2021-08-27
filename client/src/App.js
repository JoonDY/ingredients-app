import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import DetailsPage from './routes/DetailsPage';
import { IngredientsContextProvider } from './context/IngredientsContext';
import './App.css';

const App = () => {
  return (
    <IngredientsContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ingredients/:id" component={DetailsPage} />
        </Switch>
      </Router>
    </IngredientsContextProvider>
  );
};

export default App;
