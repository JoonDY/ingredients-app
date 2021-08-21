import AddIngredient from './AddIngredient';
import IngredientItem from './IngredientItem';
import { useContext, useEffect, useState } from 'react';
import { getIngredients } from '../api/Ingredients';
import { IngredientsContext } from '../context/IngredientsContext';
import { deleteIngredient } from '../api/Ingredients';
import DeletePopup from './DeletePopup';

const IngredientList = () => {
  const { ingredients, setIngredients } = useContext(IngredientsContext);
  const [sortCategory, setSortCategory] = useState('asc');
  const [sortName, setSortName] = useState('asc');
  const [sortStock, setSortStock] = useState('asc');
  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });

  useEffect(() => {
    try {
      getIngredients(setIngredients);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleDelete = (e, id) => {
    e.stopPropagation();
    deleteConfirmation(id);
  };

  const deleteConfirmation = (id) => {
    setPopup({
      show: true,
      id,
    });
  };

  const handleDeleteTrue = () => {
    deleteIngredient(popup.id);
    setIngredients(
      ingredients.filter((ingredient) => {
        return ingredient.id !== popup.id;
      })
    );
    setPopup({
      show: false,
      id: null,
    });
  };

  const handleDeleteFalse = () => {
    setPopup({
      show: false,
      id: null,
    });
  };

  const handleUpdateStock = (id, stock, e) => {
    const ingredient = ingredients.filter((ingredient) => ingredient.id === id);
    ingredient[0].in_stock = stock;
  };

  const handleSortName = () => {
    const sortedIngredients = [...ingredients].sort((a, b) => {
      const isReverse = sortName === 'asc' ? 1 : -1;
      return isReverse * a.name.localeCompare(b.name);
    });
    setIngredients(sortedIngredients);
    setSortName(sortName === 'asc' ? 'desc' : 'asc');
  };

  const handleSortCategory = () => {
    const sortedIngredients = [...ingredients].sort((a, b) => {
      const isReverse = sortCategory === 'asc' ? 1 : -1;
      return isReverse * a.category.localeCompare(b.category);
    });
    setIngredients(sortedIngredients);
    setSortCategory(sortCategory === 'asc' ? 'desc' : 'asc');
  };

  const handleSortStock = () => {
    const sortedIngredients = [...ingredients].sort((a, b) => {
      const isReverse = sortStock === 'asc' ? 1 : -1;
      return isReverse * (a.in_stock - b.in_stock);
    });
    setIngredients(sortedIngredients);
    setSortStock(sortStock === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <AddIngredient />
      {popup.show && (
        <DeletePopup
          handleDeleteTrue={handleDeleteTrue}
          handleDeleteFalse={handleDeleteFalse}
        />
      )}
      <table>
        <tbody>
          <tr>
            <th>
              Name
              <button className="btn" onClick={handleSortName}>
                Sort
              </button>
            </th>
            <th>
              Category
              <button className="btn" onClick={handleSortCategory}>
                Sort
              </button>
            </th>
            <th>
              Stock
              <button className="btn" onClick={handleSortStock}>
                Sort
              </button>
            </th>
            <th>
              Priority<button className="btn">Sort</button>
            </th>
            <th></th>
          </tr>
          {ingredients &&
            ingredients.map((item) => {
              return (
                <IngredientItem
                  key={item.id}
                  ingredient={item}
                  handleDelete={handleDelete}
                  handleUpdateStock={handleUpdateStock}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientList;
