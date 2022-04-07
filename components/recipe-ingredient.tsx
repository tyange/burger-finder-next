import { useEffect, useState } from "react";

import {
  Ingredient,
  addOneIngredient,
  removeOneIngredient,
  settingIngredientAmount,
} from "../features/ingredientsSlice";

import { nameConverter } from "../features/ingredientNameConverter";

import { FaPlus, FaMinus } from "react-icons/fa";
import { useAppDispatch } from "../app/hooks";

type Props = {
  ingredient: Ingredient;
};

const RecipeIngredient = ({ ingredient }: Props) => {
  const dispatch = useAppDispatch();

  const [enteredAmount, setEnteredAmount] = useState(1);
  useEffect(() => {
    setEnteredAmount(ingredient.amount);
  }, [ingredient.amount]);

  const plusHandler = () => {
    dispatch(addOneIngredient(ingredient));
  };

  const minusHandler = () => {
    dispatch(removeOneIngredient(ingredient));
  };

  const amountChangeHandler = (e: any) => {
    if (e.target.value.length === 0) {
      dispatch(
        settingIngredientAmount({
          ingredient,
          enteredAmount: 1,
        })
      );
      return;
    }

    dispatch(
      settingIngredientAmount({
        ingredient,
        enteredAmount: parseInt(e.target.value),
      })
    );
  };

  return (
    <div className="flex justify-between w-full">
      <span className="mr-5">{nameConverter(ingredient.name)}</span>
      <div className="flex items-center gap-2">
        <button onClick={plusHandler}>
          <FaPlus />
        </button>
        <input
          type="number"
          className="text-center"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
        <button onClick={minusHandler}>
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default RecipeIngredient;
