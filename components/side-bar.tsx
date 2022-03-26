import { ingredientKind } from "../features/ingredientsSlice";
import IngredientButtons from "./ingredient-buttons";

type objType = {
  [key: string]: string;
};

const SideBar = () => {
  const ingredientKinds: objType = ingredientKind;

  const ingredientsKindKeys = Object.keys(ingredientKinds);

  const panel = ingredientsKindKeys.map((ingredientKindKey) => {
    return (
      <div key={ingredientKindKey}>
        <IngredientButtons kind={ingredientKinds[ingredientKindKey]} />
      </div>
    );
  });

  return (
    <aside className="box-border col-span-2 p-5 overflow-auto border shadow-md rounded-xl">
      {panel}
    </aside>
  );
};

export default SideBar;
