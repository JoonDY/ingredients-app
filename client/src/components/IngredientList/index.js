import AddIngredient from '../AddIngredient';
import IngredientItem from '../IngredientItem';
import { useContext, useEffect, useState } from 'react';
import { getIngredients } from '../../api/Ingredients';
import { IngredientsContext } from '../../context/IngredientsContext';
import { deleteIngredient } from '../../api/Ingredients';
import Popup from '../DeleteModal';
import SearchBar from '../SearchBar';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { Span, IngredientTable, IngredientTHead, IngredientTH } from './styles';

const IngredientList = () => {
  const { ingredients, setIngredients } = useContext(IngredientsContext);
  const [sortCategory, setSortCategory] = useState('');
  const [sortName, setSortName] = useState('');
  const [sortStock, setSortStock] = useState('');
  const [sortPriority, setSortPriority] = useState('');
  const [popup, setPopup] = useState({
    showDelete: false,
    id: null,
  });
  const [searchParams, setSearchParams] = useState({
    name: '',
    category: '',
    stock: '',
    priority: '',
  });

  useEffect(() => {
    try {
      getIngredients(setIngredients, ingredients, handleSortPriority);
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
      showDelete: true,
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
      showDelete: false,
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
      const isReverse = sortName === '' || sortName === 'asc' ? 1 : -1;
      return isReverse * a.name.localeCompare(b.name);
    });
    setIngredients(sortedIngredients);
    setSortName(
      sortName === '' ? 'desc' : sortName === 'desc' ? 'asc' : 'desc'
    );
  };

  const handleSortCategory = () => {
    const sortedIngredients = [...ingredients].sort((a, b) => {
      const isReverse = sortCategory === '' || sortCategory === 'asc' ? 1 : -1;
      return isReverse * a.category.localeCompare(b.category);
    });
    setIngredients(sortedIngredients);
    setSortCategory(
      sortCategory === '' ? 'desc' : sortCategory === 'desc' ? 'asc' : 'desc'
    );
  };

  const handleSortStock = () => {
    const sortedIngredients = [...ingredients].sort((a, b) => {
      const isReverse = sortStock === '' || sortStock === 'asc' ? -1 : 1;
      return isReverse * (a.in_stock - b.in_stock);
    });
    setIngredients(sortedIngredients);
    setSortStock(
      sortStock === '' ? 'desc' : sortStock === 'desc' ? 'asc' : 'desc'
    );
  };

  const handleSortPriority = () => {
    const sortedIngredients = [...ingredients].sort((a, b) => {
      const isReverse = sortPriority === '' || sortPriority === 'asc' ? 1 : -1;
      return isReverse * (a.priority - b.priority);
    });
    setIngredients(sortedIngredients);
    setSortPriority(
      sortPriority === '' ? 'desc' : sortPriority === 'desc' ? 'asc' : 'desc'
    );
  };

  return (
    <div>
      {popup.showDelete && (
        <Popup
          handleDeleteTrue={handleDeleteTrue}
          handleDeleteFalse={handleDeleteFalse}
        />
      )}
      <SearchBar setSearchParams={setSearchParams} />
      <AddIngredient />
      <IngredientTable>
        <IngredientTHead>
          <tr>
            <IngredientTH pointer onClick={handleSortName}>
              Name
              <Span>
                {sortName === 'desc' ? (
                  <MdKeyboardArrowUp />
                ) : sortName === 'asc' ? (
                  <MdKeyboardArrowDown style={{ verticalAlign: 'bottom' }} />
                ) : (
                  ''
                )}
              </Span>
            </IngredientTH>
            <IngredientTH pointer onClick={handleSortCategory}>
              Category
              <Span>
                {sortCategory === 'desc' ? (
                  <MdKeyboardArrowUp />
                ) : sortCategory === 'asc' ? (
                  <MdKeyboardArrowDown style={{ verticalAlign: 'bottom' }} />
                ) : (
                  ''
                )}
              </Span>
            </IngredientTH>
            <IngredientTH center pointer onClick={handleSortStock}>
              Stock
              <Span>
                {sortStock === 'desc' ? (
                  <MdKeyboardArrowUp />
                ) : sortStock === 'asc' ? (
                  <MdKeyboardArrowDown style={{ verticalAlign: 'bottom' }} />
                ) : (
                  ''
                )}
              </Span>
            </IngredientTH>
            <IngredientTH center pointer onClick={handleSortPriority}>
              Priority
              <Span>
                {sortPriority === 'asc' ? (
                  <MdKeyboardArrowUp />
                ) : sortPriority === 'desc' ? (
                  <MdKeyboardArrowDown style={{ verticalAlign: 'bottom' }} />
                ) : (
                  ''
                )}
              </Span>
            </IngredientTH>
            <IngredientTH></IngredientTH>
          </tr>
        </IngredientTHead>
        <tbody>
          {ingredients &&
            ingredients
              .filter((item) => {
                return item.name.includes(searchParams.name);
              })
              .filter((item) => {
                return item.category.includes(searchParams.category);
              })
              .filter((item) => {
                if (searchParams.priority) {
                  return item.priority === parseInt(searchParams.priority);
                }
                return true;
              })
              .filter((item) => {
                if (!(searchParams.stock === '')) {
                  return item.in_stock.toString() === searchParams.stock;
                }
                return true;
              })
              .map((item) => {
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
      </IngredientTable>
    </div>
  );
};

export default IngredientList;
