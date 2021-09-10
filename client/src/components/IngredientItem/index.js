import { useState } from 'react';
import { updateIngredient } from '../../api/Ingredients';
import { useHistory } from 'react-router-dom';
import {
  IngredientTR,
  DeleteButton,
  UpdateButton,
  ButtonContainer,
  NameTD,
  CategoryTD,
  StockTD,
  PriorityTD,
  ButtonTD,
} from './styles';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import UpdateIngredient from '../UpdateIngredient';

const IngredientItem = ({ ingredient, handleDelete, handleUpdateStock }) => {
  const { id, name, category, priority, in_stock } = ingredient;
  const [itemName, setItemName] = useState(name);
  const [itemStock, setItemStock] = useState(in_stock);
  const [itemCategory, setItemCategory] = useState(category);
  const [itemPriority, setItemPriority] = useState(priority);
  const [popup, setPopup] = useState(false);
  let history = useHistory();
  const setStates = {
    setItemName,
    setItemStock,
    setItemCategory,
    setItemPriority,
  };
  const states = {
    id,
    itemName,
    itemStock,
    itemCategory,
    itemPriority,
  };

  const handleStock = (e) => {
    e.stopPropagation();
    setItemStock(e.target.checked);
    updateIngredient(id, name, e.target.checked, category, priority);
    handleUpdateStock(id, e.target.checked, e);
  };

  const handleUpdate = (e) => {
    e.stopPropagation();
    setPopup(true);
    /* history.push(`/ingredients/${id}/update`); */
  };

  const handleIngredientDetail = () => {
    history.push(`ingredients/${id}`);
  };

  return (
    <IngredientTR>
      <StockTD center>
        <label className="flex-center">
          <input
            type="checkbox"
            checked={itemStock}
            onChange={(e) => {
              handleStock(e);
            }}
          />
          <span className="custom-checkbox" />
        </label>
      </StockTD>
      <NameTD pointer onClick={handleIngredientDetail}>
        {itemName}
      </NameTD>
      <CategoryTD pointer onClick={handleIngredientDetail}>
        {itemCategory}
      </CategoryTD>

      <PriorityTD center>{'!'.repeat(itemPriority)}</PriorityTD>
      <ButtonTD>
        <ButtonContainer className="flex-center">
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
        </ButtonContainer>

        {popup && (
          <UpdateIngredient
            id={id}
            setPopup={setPopup}
            setStates={setStates}
            states={states}
          />
        )}
      </ButtonTD>
    </IngredientTR>
  );
};

export default IngredientItem;
