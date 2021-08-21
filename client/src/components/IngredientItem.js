import { useState } from 'react';
import { updateIngredient } from '../api/Ingredients';
import { useHistory } from 'react-router-dom';

const IngredientItem = ({ ingredient, handleDelete, handleUpdateStock }) => {
  const { id, name, category, priority } = ingredient;
  const [stock, setStock] = useState(ingredient.in_stock);
  let history = useHistory();

  const handleStock = (e) => {
    e.stopPropagation();
    setStock(e.target.checked);
    updateIngredient(id, name, e.target.checked, category);
    handleUpdateStock(id, e.target.checked, e);
  };

  const handleUpdate = (e) => {
    e.stopPropagation();
    history.push(`/ingredients/${id}/update`);
  };

  const handleIngredientDetail = () => {
    history.push(`ingredients/${id}`);
  };

  return (
    <tr>
      <td onClick={handleIngredientDetail}>{name}</td>
      <td onClick={handleIngredientDetail}>{category}</td>
      <td>
        <input
          type="checkbox"
          checked={stock}
          onChange={(e) => {
            handleStock(e);
          }}
        />
      </td>
      <td>{'!'.repeat(priority)}</td>
      <td>
        <button
          className="btn"
          onClick={(e) => {
            handleUpdate(e);
          }}
        >
          Update
        </button>
        <button
          className="btn"
          onClick={(e) => {
            handleDelete(e, id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default IngredientItem;
