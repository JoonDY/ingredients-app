import React from 'react';
import IngredientList from '../../components/IngredientList';
import Header from '../../components/Header';
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
