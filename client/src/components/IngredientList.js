import AddIngredient from './AddIngredient';
import IngredientItem from './IngredientItem';
import { useContext, useEffect, useState } from 'react';
import { getIngredients } from '../api/Ingredients';
import { IngredientsContext } from '../context/IngredientsContext';
import { deleteIngredient } from '../api/Ingredients';

const IngredientList = () => {
  
  const { ingredients, setIngredients } = useContext(IngredientsContext)
  const [sort, setSort] = useState('asc');

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

  const handleSortName = (query) => {
    const sortedIngredients = [...ingredients].sort((a,b) => {
      const isReverse = (sort === 'asc') ? 1 : -1;
      return isReverse * a[query].localeCompare(b[query])
    })
    setIngredients(sortedIngredients)
    setSort((sort === 'asc') ? 'desc' : 'asc' )
  }
  
  return (
    <div>
      <AddIngredient />
      <table>
        <tr>
          <th>Name <button onClick={() => {handleSortName('name')}}>Sort</button></th>
          <th>Category<button onClick={() => {handleSortName('category')}}>Sort</button></th>
          <th>Stock</th>
          <th></th>
        </tr>
         {ingredients && ingredients.map((item) => {
        return <IngredientItem key={item.id} ingredient={item} handleDelete={handleDelete}/>
      })}
      </table>
     
      
    </div>
  )
}

export default IngredientList
