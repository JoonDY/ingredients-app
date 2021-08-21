import AddIngredient from './AddIngredient';
import IngredientItem from './IngredientItem';
import { useContext, useEffect, useState } from 'react';
import { getIngredients } from '../api/Ingredients';
import { IngredientsContext } from '../context/IngredientsContext';
import { deleteIngredient } from '../api/Ingredients';

const IngredientList = () => {
  
  const {ingredients, setIngredients} = useContext(IngredientsContext)
  const [sortCategory, setSortCategory] = useState('asc');
  const [sortName, setSortName] = useState('asc');
  const [sortStock, setSortStock] = useState('asc');

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
  };

  const handleUpdateStock = (id, stock) => {
    const ingredient = ingredients.filter(ingredient => ingredient.id === id);
    ingredient[0].in_stock = stock;
  }

  const handleSortName = () => {
    const sortedIngredients = [...ingredients].sort((a,b) => {
      const isReverse = (sortName === 'asc') ? 1 : -1;
      return isReverse * a.name.localeCompare(b.name)
    })
    setIngredients(sortedIngredients)
    setSortName((sortName === 'asc') ? 'desc' : 'asc' )
  };

  const handleSortCategory = () => {
    const sortedIngredients = [...ingredients].sort((a,b) => {
      const isReverse = (sortCategory === 'asc') ? 1 : -1;
      return isReverse * a.category.localeCompare(b.category)
    })
    setIngredients(sortedIngredients)
    setSortCategory((sortCategory === 'asc') ? 'desc' : 'asc' )
  };

  const handleSortStock = () => {
    const sortedIngredients = [...ingredients].sort((a,b) => {
      const isReverse = (sortStock === 'asc') ? 1 : -1;
      return isReverse * (a.in_stock - b.in_stock)
    })
    setIngredients(sortedIngredients)
    setSortStock((sortStock === 'asc') ? 'desc' : 'asc' )
  };

  
  return (
    <div>
      <AddIngredient />
      <table>
        <tbody>
          <tr>
            <th>Name <button onClick={handleSortName}>Sort</button></th>
            <th>Category<button onClick={handleSortCategory}>Sort</button></th>
            <th>Stock<button onClick={handleSortStock}>Sort</button></th>
            <th></th>
          </tr>
          {ingredients && ingredients.map((item) => {
          return <IngredientItem key={item.id} ingredient={item} handleDelete={handleDelete} handleUpdateStock={handleUpdateStock}/>
          })} 
        </tbody>
      </table>
     
      
    </div>
  )
}

export default IngredientList
