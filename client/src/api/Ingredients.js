const BASE_URL = 'http://localhost:3001/api/v1/ingredients'

export const getIngredients = async(setIngredients) => {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setIngredients(data.data.ingredients)
    } catch (err) {
        console.log(err)
    }
    
}

export const postIngredients = async(name, category, addIngredient) => {
    try {
        const req = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.toLowerCase(),
            category: category
        })
    });
    const res = await req.json();
    if (req.status === 500) {
        if (res.err.code === "23505") {
            alert('Item already exists.')
        }
    } else {
        addIngredient(res.data.ingredients[0])
    }
    
    
    } catch (err) {
        console.log(err)
    }
    
} 

export const deleteIngredient = async(id) => {
    await fetch (`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
}

export const updateIngredient = async(id, name, inStock) => {
    await fetch (`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id,
            name,
            in_stock: inStock
        })
    });
}