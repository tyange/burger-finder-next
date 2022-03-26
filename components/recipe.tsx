import { useAppSelector } from "../app/hooks";
import { getIngredients } from "../features/ingredientsSlice";

import { nameConverter } from "../features/ingredientNameConverter";

// type ingredientsType = {
//   [key: string]: {
//     [key: string]: number;
//   };
// };

const Recipe = () => {
  const data = useAppSelector(getIngredients);

  return (
    <div className="box-border flex flex-col col-span-5 p-5 border shadow-md rounded-xl">
      <div className="flex flex-col items-end flex-1">
        <ul>
          {data.ingredients.map(
            (ingredient) =>
              ingredient.amount !== 0 && (
                <li key={ingredient.name}>
                  <span>{ingredient.name}</span>
                  <span>{ingredient.amount}</span>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="box-border flex justify-end pt-3 border-t-2">
        <span className="mr-3">선택한 재료의 총 개수 :</span>
        <span>
          {data.ingredients.reduce((prev, next) => prev + next.amount, 0)}
        </span>
      </div>
    </div>
  );
};

export default Recipe;
