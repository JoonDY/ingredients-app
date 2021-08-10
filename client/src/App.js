import { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import DetailsPage from "./routes/DetailsPage";
import { IngredientsContextProvider } from "./context/IngredientsContext";

const App = () => {
  

  return (
    <IngredientsContextProvider>
      <Router>
        <Switch>
          <Route exact path ="/" component = {Home}/>
          <Route exact path ="/ingredients/:id/update" component = {UpdatePage}/>
          <Route exact path ="/ingredients/:id" component = {DetailsPage}/>
        </Switch>
      </Router>
    </IngredientsContextProvider>
    
  );
}

export default App;
