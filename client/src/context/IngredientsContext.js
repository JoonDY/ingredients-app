import React, { useState, createContext } from 'react';

export const IngredientsContext = createContext();

export const IngredientsContextProvider = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const addIngredient = (ingredient) => {
    setIngredients([ingredient, ...ingredients]);
  };

  return (
    <IngredientsContext.Provider
      value={{ ingredients, setIngredients, addIngredient }}
    >
      {props.children}
    </IngredientsContext.Provider>
  );
};
