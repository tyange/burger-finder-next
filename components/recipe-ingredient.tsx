import {
  Ingredient,
  addOneIngredient,
  removeOneIngredient,
} from "../features/ingredientsSlice";

import { nameConverter } from "../features/ingredientNameConverter";

import { FaPlus, FaMinus } from "react-icons/fa";
import { useAppDispatch } from "../app/hooks";

type Props = {
  ingredient: Ingredient;
};

const RecipeIngredient = ({ ingredient }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between w-full">
      <span className="mr-5">{nameConverter(ingredient.name)}</span>
      <div className="flex items-center gap-2">
        <button onClick={() => dispatch(addOneIngredient(ingredient))}>
          <FaPlus />
        </button>
        <span>{ingredient.amount}</span>
        <button onClick={() => dispatch(removeOneIngredient(ingredient))}>
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default RecipeIngredient;
