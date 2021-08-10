import React, { useState, createContext } from "react";

export const IngredientsContext = createContext();

export const IngredientsContextProvider = props => {
  const [ingredients, setIngredients] = useState([]);

  return (
    <IngredientsContext.Provider value={{ingredients, setIngredients}}>
      {props.children}
    </IngredientsContext.Provider>
  )
}