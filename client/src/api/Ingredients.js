const BASE_URL = 'http://localhost:3001/api/v1/ingredients';

export const getIngredients = async (setIngredients) => {
  const token = JSON.parse(localStorage.user);

  try {
    const res = await fetch(BASE_URL, {
      headers: {
        Authorization: token,
      },
    });
    const data = await res.json();

    setIngredients(data.data.ingredients);
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
  const token = JSON.parse(localStorage.user);
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
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
  const token = JSON.parse(localStorage.user);
  try {
    const req = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
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
  const token = JSON.parse(localStorage.user);

  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  });
};

export const updateIngredient = async (id, name, stock, category, priority) => {
  const token = JSON.parse(localStorage.user);
  await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
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
