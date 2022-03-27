import { useAppSelector } from "../app/hooks";
import { getIngredients } from "../features/ingredientsSlice";

import { nameConverter } from "../features/ingredientNameConverter";

import { FaTimes } from "react-icons/fa";

const Recipe = () => {
  const data = useAppSelector(getIngredients);

  return (
    <div className="box-border flex flex-col col-span-5 p-5 border shadow-md rounded-xl">
      <div className="flex flex-col items-end flex-1">
        <ul className="pr-3">
          {data.ingredients.map(
            (ingredient) =>
              ingredient.amount !== 0 && (
                <li key={ingredient.name} className="flex items-center gap-2">
                  <span>{nameConverter(ingredient.name)}</span>
                  <FaTimes />
                  <span>{ingredient.amount}</span>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="box-border flex justify-end pt-3 border-t-2">
        <span className="mr-3">선택한 재료의 총 개수 :</span>
        <span className="pr-3">
          {data.ingredients.reduce((prev, next) => prev + next.amount, 0)}
        </span>
      </div>
    </div>
  );
};

export default Recipe;
