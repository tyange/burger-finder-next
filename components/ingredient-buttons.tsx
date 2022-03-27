import { useAppDispatch, useAppSelector } from "../app/hooks";
import { allIngredients, addOneIngredient } from "../features/ingredientsSlice";

import {
  kindConverter,
  nameConverter,
} from "../features/ingredientNameConverter";

type Props = {
  kind: string;
};

const IngredientButtons = ({ kind }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <details>
      <summary>{kindConverter(kind)}</summary>
      <ul>
        {allIngredients
          .filter((ingredient) => ingredient.kind === kind)
          .map((ingredient) => (
            <li key={ingredient.name}>
              <button onClick={() => dispatch(addOneIngredient(ingredient))}>
                {nameConverter(ingredient.name)}
              </button>
            </li>
          ))}
      </ul>
    </details>
  );
};

export default IngredientButtons;
