import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getSingleIngredient, updateIngredient } from '../../api/Ingredients';

const UpdateIngredient = () => {
  const { id } = useParams();
  let history = useHistory();
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    try {
      getSingleIngredient(id, setName, setStock, setCategory, setPriority);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleStock = (e) => {
    setStock(e.target.checked);
  };

  const handlePriority = (e) => {
    setPriority(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateIngredient(id, name, stock, category, priority);
    history.push('/');
  };

  return (
    <div>
      <form action="submit">
        <div className="flex">
          <div className="flex-column flex-left">
            <label htmlFor="name">Name</label>
            <label htmlFor="category">Category</label>
            <label htmlFor="stock">Stock</label>
            <label htmlFor="priority">Priority</label>
          </div>
          <div className="flex-column">
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleName}
              required
            />
            <select id="category" value={category} onChange={handleCategory}>
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
            </select>
            <input
              type="checkbox"
              checked={stock}
              id="stock"
              onChange={handleStock}
            />
            <select
              id="priority"
              value={priority}
              onChange={handlePriority}
              required
            >
              <option value="" disabled>
                Perishable
              </option>
              <option value="3">1 Week</option>
              <option value="2">1 Month</option>
              <option value="1">6 Months</option>
              <option value="0">1 Year+</option>
            </select>
          </div>
        </div>
        <button onClick={handleUpdate} type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateIngredient;
