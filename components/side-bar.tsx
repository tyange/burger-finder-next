import { useAppSelector } from "../app/hooks";
import { getIngredients } from "../features/ingredientsSlice";

type ingredientsType = {
  [key: string]: Object;
};

const SideBar = () => {
  const ingredients: ingredientsType = useAppSelector(getIngredients);

  const ingredientsKeys = Object.keys(ingredients);

  const panel = ingredientsKeys.map((ingredientKey) => {
    return (
      <div key={ingredientKey}>
        <details>
          <summary>{ingredientKey}</summary>
          <ul>
            {Object.keys(ingredients[ingredientKey]).map((subIngredient) => (
              <li key={subIngredient}>
                <button>{subIngredient}</button>
              </li>
            ))}
          </ul>
        </details>
      </div>
    );
  });

  return <aside>{panel}</aside>;
};

export default SideBar;
