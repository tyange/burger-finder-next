import { Ingredient } from "../features/ingredientsSlice";

import { nameConverter } from "../features/ingredientNameConverter";

import { FaPlus, FaMinus } from "react-icons/fa";

type Props = {
  ingredientName: string;
  ingredientAmount: number;
};

const RecipeIngredient = ({ ingredientName, ingredientAmount }: Props) => {
  return (
    <div className="flex justify-between w-full">
      <span className="mr-5">{nameConverter(ingredientName)}</span>
      <div className="flex items-center gap-2">
        <button>
          <FaPlus />
        </button>
        <span>{ingredientAmount}</span>
        <button>
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default RecipeIngredient;
