import React, { useState } from 'react';
import { updateIngredient } from '../../api/Ingredients';
import {
  ModalWrapper,
  ModalContent,
  H2,
  Input,
  Select,
  Label,
  Form,
} from '../../shared/globals';
import { AddButton } from '../AddIngredient/styles';

const UpdateIngredient = ({ id, setPopup, setStates, states }) => {
  const { setItemCategory, setItemName, setItemStock, setItemPriority } =
    setStates;
  const { itemName, itemCategory, itemPriority, itemStock } = states;
  const [name, setName] = useState(itemName);
  const [stock, setStock] = useState(itemStock);
  const [category, setCategory] = useState(itemCategory);
  const [priority, setPriority] = useState(itemPriority);

  // useEffect(() => {
  //   try {
  //     getSingleIngredient(id, setName, setStock, setCategory, setPriority);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  const handleClosePopup = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setPopup(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateIngredient(id, name, stock, category, priority);
    setItemName(name);
    setItemCategory(category);
    setItemStock(stock);
    setItemPriority(priority);
    setPopup(false);
  };

  const changeToBool = (str) => {
    if (str === 'true') {
      return true;
    } else if (str === 'false') {
      return false;
    } else {
      return '';
    }
  };

  return (
    <ModalWrapper onClick={handleClosePopup}>
      <ModalContent>
        <H2>Update Ingredient</H2>
        <div>
          <Form action="submit">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <Label htmlFor="category">Category</Label>
            <Select
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="" disabled>
                Category
              </option>
              <option value="dairy">Dairy</option>
              <option value="protein">Protein</option>
              <option value="carb">Carb</option>
              <option value="snack">Snack</option>
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetable</option>
              <option value="drink ">Drink</option>
              <option value="oil">Oil</option>
              <option value="condiment">Condiment</option>
              <option value="spice">Spice</option>
              <option value="other">Other</option>
            </Select>

            <Label htmlFor="stock">Stock</Label>
            <Select
              value={stock}
              onChange={(e) => {
                const bool = changeToBool(e.target.value);
                setStock(bool);
              }}
              required
            >
              <option value="" disabled>
                In Stock
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Select>
            <Label htmlFor="priority">Priority</Label>
            <Select
              id="priority"
              value={priority}
              onChange={(e) => {
                setPriority(e.target.value);
              }}
              required
            >
              <option value="" disabled>
                Perishable
              </option>
              <option value="3">1 Week</option>
              <option value="2">1 Month</option>
              <option value="1">6 Months</option>
              <option value="0">1 Year+</option>
            </Select>
            <AddButton onClick={handleUpdate} type="submit">
              Update
            </AddButton>
          </Form>
        </div>
      </ModalContent>
    </ModalWrapper>
  );
};

export default UpdateIngredient;
