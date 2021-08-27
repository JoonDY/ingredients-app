const BASE_URL = 'http://localhost:3001/api/v1/ingredients';

export const getIngredients = async (setIngredients) => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();

    /* Default Sort Ingredients by Priority */
    const ingredients = data.data.ingredients;
    const sortedIngredients = [...ingredients].sort((a, b) => {
      return -1 * (a.priority - b.priority);
    });

    setIngredients(sortedIngredients);
  } catch (err) {
    console.log(err);
  }
};

export const getSingleIngredient = async (
  id,
  setName,
  setStock,
  setCategory,
  setPriority
) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    const data = await res.json();
    setName(data.data.ingredients[0].name);
    setStock(data.data.ingredients[0].in_stock);
    setCategory(data.data.ingredients[0].category);
    setPriority(data.data.ingredients[0].priority);
  } catch (err) {
    console.log(err);
  }
};

export const postIngredients = async (
  name,
  category,
  stock,
  priority,
  addIngredient,
  setFormError,
  setPopUp
) => {
  try {
    const req = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.toLowerCase(),
        category: category,
        in_stock: stock,
        priority,
      }),
    });
    const res = await req.json();
    if (req.status === 500) {
      if (res.err.code === '23505') {
        setFormError({
          nameError: 'Ingredient already exists',
          categoryError: '',
          stockError: '',
          priorityError: '',
        });
      }
    } else {
      addIngredient(res.data.ingredients[0]);
      setPopUp(false);
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteIngredient = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
};

export const updateIngredient = async (id, name, stock, category, priority) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      name: name.toLowerCase(),
      in_stock: stock,
      category,
      priority,
    }),
  });
};
