import { useContext, useState } from 'react';
import { postIngredients } from '../../api/Ingredients';
import { IngredientsContext } from '../../context/IngredientsContext';
import {
  Form,
  ModalContent,
  ModalWrapper,
  Input,
  Select,
  ErrorMessage,
} from '../../shared/globals';
import { AddButton, AddIngredientButton } from './styles';

const AddIngredient = () => {
  const { addIngredient } = useContext(IngredientsContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [priority, setPriority] = useState('');
  const [popup, setPopup] = useState(false);
  const [formError, setFormError] = useState({
    nameError: '',
    categoryError: '',
    stockError: '',
    priorityError: '',
  });

  const handleClosePopup = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    setPopup(false);
    resetState();
  };

  const validateForm = () => {
    let nameError = '';
    let categoryError = '';
    let stockError = '';
    let priorityError = '';

    if (!name) {
      nameError = 'Name required';
    }

    if (!category) {
      categoryError = 'Category required';
    }
    if (!stock) {
      stockError = 'Stock required';
    }

    if (!priority) {
      priorityError = 'Perishability required';
    }

    if (nameError || categoryError || stockError || priorityError) {
      setFormError({
        nameError,
        categoryError,
        stockError,
        priorityError,
      });
      return false;
    }

    return true;
  };

  const resetState = () => {
    setName('');
    setCategory('');
    setStock('');
    setPriority('');
    setFormError({
      nameError: '',
      categoryError: '',
      stockError: '',
      priorityError: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = validateForm();
    if (valid) {
      await postIngredients(
        name,
        category,
        stock,
        priority,
        addIngredient,
        setFormError,
        setPopup
      );
      resetState();
      setFormError('');
    } else {
      return;
    }
  };

  return (
    <div>
      <AddIngredientButton
        onClick={() => {
          setPopup(true);
        }}
      >
        <span className="plus-sign">+</span>
        <span className="full-plus-sign">+ Add Ingredient</span>
      </AddIngredientButton>
      {popup && (
        <ModalWrapper onClick={handleClosePopup}>
          <ModalContent>
            <Form action="submit">
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value.toLowerCase())}
                placeholder="Name"
                required
              />
              {formError.nameError && (
                <ErrorMessage>{formError.nameError}</ErrorMessage>
              )}
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
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
              {formError.categoryError && (
                <ErrorMessage>{formError.categoryError}</ErrorMessage>
              )}

              <Select
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
              >
                <option value="" disabled>
                  In Stock
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Select>
              {formError.stockError && (
                <ErrorMessage>{formError.stockError}</ErrorMessage>
              )}

              <Select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
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
              {formError.priorityError && (
                <ErrorMessage>{formError.priorityError}</ErrorMessage>
              )}

              <AddButton className="btn" onClick={handleSubmit} type="submit">
                Add
              </AddButton>
            </Form>
          </ModalContent>
        </ModalWrapper>
      )}
    </div>
  );
};

export default AddIngredient;
