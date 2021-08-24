import { useState } from 'react';

const SearchBar = ({ setSearchParams }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [priority, setPriority] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
    setSearch({
      type: 'name',
      value: e.target.value,
    });
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch({
      type: 'category',
      value: e.target.value,
    });
  };

  const handleStock = (e) => {
    setStock(e.target.value);
    setSearch({
      type: 'stock',
      value: e.target.value,
    });
  };

  const handlePriority = (e) => {
    setPriority(e.target.value);
    setSearch({
      type: 'priority',
      value: e.target.value,
    });
  };

  const setSearch = (e) => {
    if (e.type === 'name') {
      setSearchParams({
        name: e.value,
        category,
        stock,
        priority,
      });
    }

    if (e.type === 'category') {
      setSearchParams({
        name,
        category: e.value,
        stock,
        priority,
      });
    }

    if (e.type === 'stock') {
      const bool = e.value === 'true' ? true : e.value === 'false' ? false : '';
      setSearchParams({
        name,
        category,
        stock: bool,
        priority,
      });
    }

    if (e.type === 'priority') {
      setSearchParams({
        name,
        category,
        stock,
        priority: e.value,
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="Search Ingredient"
        required
      />
      <select value={category} onChange={handleCategory} required>
        <option value="">Category</option>
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
        <option value="">Stock</option>
        <option value="true">Yes</option>
        <option value="false"> No</option>
      </select>

      <select value={priority} onChange={handlePriority} required>
        <option value="">Perishable</option>
        <option value="3">1 Week</option>
        <option value="2">1 Month</option>
        <option value="1">6 Months</option>
        <option value="0">1 Year+</option>
      </select>
    </div>
  );
};

export default SearchBar;
