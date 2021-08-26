import React from 'react';
import Header from '../../components/Header';
import IngredientList from '../../components/IngredientList';
import { MainContainer } from './styles';

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <IngredientList />
    </MainContainer>
  );
};

export default Home;
