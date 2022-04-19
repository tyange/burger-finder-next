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
    <div>
      <p className="mb-2">{kindConverter(kind)}</p>
      <ul className="flex flex-col gap-2 indent-2">
        {allIngredients
          .filter((ingredient) => ingredient.kind === kind)
          .map((ingredient) => (
            <li key={ingredient.name}>
              <button
                onClick={() => dispatch(addIngredient(ingredient))}
                className="box-border p-2 text-left border shadow-sm rounded-xl"
              >
                {nameConverter(ingredient.name)}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default IngredientButtons;
