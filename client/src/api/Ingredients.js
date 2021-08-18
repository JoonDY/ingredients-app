const BASE_URL = 'http://localhost:3001/api/v1/ingredients'

export const getIngredients = async(setIngredients) => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setIngredients(data.data.ingredients)
}

export const postIngredients = async(name, quantity, addIngredient) => {
    const req = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            quantity: quantity
        })
    });

    const res = await req.json();
    addIngredient(res.data.ingredients[0])
} 

export const deleteIngredient = async(id) => {
    const req = await fetch (`${BASE_URL}/${id}`, {
        method: 'DELETE'
    })
}