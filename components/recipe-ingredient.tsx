import React, { useEffect, useState } from "react";

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
  console.log("rerender");

  const dispatch = useAppDispatch();

  const [enteredAmount, setEnteredAmount] = useState(1);

  const plusHandler = () => {
    setEnteredAmount((prev) => (prev += 1));
    dispatch(addOneIngredient(ingredient));
  };

  const minusHandler = () => {
    setEnteredAmount((prev) => (prev -= 1));
    dispatch(removeOneIngredient(ingredient));
  };

  const amountChangeHandler = (e: any) => {
    if (e.target.value.length === 0) {
      setEnteredAmount(1);
      dispatch(
        settingIngredientAmount({
          ingredient,
          enteredAmount: 1,
        })
      );
      return;
    }

    setEnteredAmount(parseInt(e.target.value));
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

export default React.memo(RecipeIngredient);
