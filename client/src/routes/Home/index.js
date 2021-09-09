import React from 'react';
import IngredientList from '../../components/IngredientList';
import { MainContainer } from './styles';

const Home = () => {
  return (
    <MainContainer>
      <IngredientList />
    </MainContainer>
  );
};

export default Home;
