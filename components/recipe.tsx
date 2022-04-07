import { useAppSelector } from "../app/hooks";
import { getIngredients } from "../features/ingredientsSlice";

import RecipeIngredient from "./recipe-ingredient";

const Recipe = () => {
  const data = useAppSelector(getIngredients);

  return (
    <div className="box-border flex flex-col col-span-5 p-5 border shadow-md rounded-xl">
      <div className="flex flex-col items-end flex-1">
        <ul className="flex flex-col gap-3 pr-3">
          {data.ingredients.map(
            (ingredient) =>
              ingredient.amount !== 0 && (
                <li
                  key={ingredient.name}
                  className="box-border flex items-center gap-2 p-3 border shadow-sm rounded-xl"
                >
                  <RecipeIngredient ingredient={ingredient} />
                </li>
              )
          )}
        </ul>
      </div>
      <div className="box-border flex justify-between pt-3 border-t-2">
        <div>
          <span className="mr-3">선택한 재료의 총 개수 :</span>
          <span className="pr-3">
            {data.ingredients.reduce((prev, next) => prev + next.amount, 0)}
          </span>
        </div>
        <div>{/* <button onClick={logging}>logging</button> */}</div>
      </div>
    </div>
  );
};

export default Recipe;
