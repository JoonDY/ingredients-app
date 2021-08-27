import { useState } from 'react';
import { updateIngredient } from '../../api/Ingredients';
import { useHistory } from 'react-router-dom';
import {
  IngredientTD,
  IngredientTR,
  DeleteButton,
  UpdateButton,
} from './styles';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const IngredientItem = ({ ingredient, handleDelete, handleUpdateStock }) => {
  const { id, name, category, priority } = ingredient;
  const [stock, setStock] = useState(ingredient.in_stock);
  let history = useHistory();

  const handleStock = (e) => {
    e.stopPropagation();
    setStock(e.target.checked);
    updateIngredient(id, name, e.target.checked, category, priority);
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
    <IngredientTR>
      <IngredientTD pointer onClick={handleIngredientDetail}>
        {name}
      </IngredientTD>
      <IngredientTD pointer onClick={handleIngredientDetail}>
        {category}
      </IngredientTD>
      <IngredientTD center>
        <label className="flex-center">
          <input
            type="checkbox"
            checked={stock}
            onChange={(e) => {
              handleStock(e);
            }}
          />
          <span className="custom-checkbox" />
        </label>
      </IngredientTD>
      <IngredientTD center>{'!'.repeat(priority)}</IngredientTD>
      <IngredientTD className="flex-center">
        <UpdateButton
          className="btn"
          onClick={(e) => {
            handleUpdate(e);
          }}
        >
          <FaRegEdit />
        </UpdateButton>
        <DeleteButton
          className="btn"
          onClick={(e) => {
            handleDelete(e, id);
          }}
        >
          <MdDelete />
        </DeleteButton>
      </IngredientTD>
    </IngredientTR>
  );
};

export default IngredientItem;
