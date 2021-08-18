import AddIngredient from './AddIngredient';
import IngredientItem from './IngredientItem';
import { useContext, useEffect } from 'react';
import { getIngredients } from '../api/Ingredients';
import { IngredientsContext } from '../context/IngredientsContext';
import { deleteIngredient } from '../api/Ingredients';

const IngredientList = () => {
  
  const { ingredients, setIngredients } = useContext(IngredientsContext)

  useEffect(() => {
    try { 
      getIngredients(setIngredients);
    } catch(err) {
      console.log(err)
    }
  }, []);

  const handleDelete = (id) => {
    deleteIngredient(id);
    setIngredients(ingredients.filter((ingredient) => {
      return ingredient.id !== id
    }))
  }
 

  return (
    <div>
      <AddIngredient />
      {ingredients && ingredients.map((item) => {
        return <IngredientItem key={item.id} ingredient={item} setIngredients={setIngredients} handleDelete={handleDelete}/>
      })}
      
    </div>
  )
}

export default IngredientList
