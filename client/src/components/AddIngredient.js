import { useContext, useState } from 'react';
import { postIngredients } from '../api/Ingredients';
import { IngredientsContext } from '../context/IngredientsContext';

const AddIngredient = () => {
  const { addIngredient } = useContext(IngredientsContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [priority, setPriority] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleStock = (e) => {
    setStock(e.target.value);
  };

  const handlePriority = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postIngredients(name, category, stock, priority, addIngredient);
    setName('');
    setCategory('');
    setStock('');
    setPriority('');
  };

  return (
    <div>
      <form action="submit">
        <input
          type="text"
          value={name}
          onChange={handleName}
          placeholder="Name"
          required
        />
        <select value={category} onChange={handleCategory} required>
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
        <select value={stock} onChange={handleStock} required>
          <option value="" disabled>
            In Stock
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select value={priority} onChange={handlePriority} required>
          <option value="" disabled>
            Perishable
          </option>
          <option value="3">1 Week</option>
          <option value="2">1 Month</option>
          <option value="1">6 Months</option>
          <option value="0">1 Year+</option>
        </select>
        <button className="btn" onClick={handleSubmit} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddIngredient;
