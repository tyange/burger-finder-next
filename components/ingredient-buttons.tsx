import { useAppDispatch } from "../app/hooks";
import { allIngredients, addIngredient } from "../features/ingredientsSlice";

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
              <button onClick={() => dispatch(addIngredient(ingredient))}>
                {nameConverter(ingredient.name)}
              </button>
            </li>
          ))}
      </ul>
    </details>
  );
};

export default IngredientButtons;
