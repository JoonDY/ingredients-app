import React from 'react';
import Header from "../components/Header";
import IngredientList from "../components/IngredientList";

const Home = () => {
  return (
    <main className="App">
      <Header />
      <IngredientList/>
    </main>
  )
}

export default Home
