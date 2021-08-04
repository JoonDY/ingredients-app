import AddIngredient from './AddIngredient'
import IngredientItem from './IngredientItem'

const IngredientList = ({ingredients, handleAddIngredient}) => {

  return (
    <div>
      <AddIngredient ingredients={ingredients} handleAddIngredient={handleAddIngredient}/>
    </div>
  )
}

export default IngredientList
