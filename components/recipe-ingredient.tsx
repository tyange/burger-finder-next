import React, { useState } from "react";

import { useAppDispatch } from "../app/hooks";
import {
  Ingredient,
  settingIngredientAmount,
} from "../features/ingredientsSlice";

import { nameConverter } from "../features/ingredientNameConverter";

type Props = {
  ingredient: Ingredient;
};

const RecipeIngredient = ({ ingredient }: Props) => {
  console.log("rerender");

  // 애초에 redux-toolkit으로만 상태 관리를 하려고 했지만,
  // 하지만 재료의 개수를 input으로 제어하게 되면서, useState를 쓰지 않을 수가 없었다.
  const dispatch = useAppDispatch();
  // initialState는 무조건 1인데 그 이유가 있다.
  // useState에 지정된 initialState는 컴포넌트의 '최초 렌더링'이 일어날 때에만 적용되고 후속 렌더링에는 지정된 initialState가 적용되지 않는다.
  // RecipeIngredient 컴포넌트의 최초 렌더링은 IngredientButton을 '최초'로 누를 때 발생한다.
  // (앱이 로딩된 이후 해당 재료의 RecipeIngredient 컴포넌트가 Recipe 컴포넌트에 추가된 적이 없는 상태,
  // 다시 말해 Recipe 컴포넌트의 어떤 자식 컴포넌트도 렌더링 되지 않은 상태를 의미한다.)
  // 이 경우 자연스럽게 initialState인 1을 부여 받게 된다.
  const [enteredAmount, setEnteredAmount] = useState(1);

  // 위에서 state를 선언하고 나면, 아래의 Jsx에서 사용할 input의 onChange 핸들러, amountChangeHandler를 선언한다.
  // amountChangeHandler는 입력값을 받아 state로 새롭게 저장하고 동시에 주어진 입력값을 재료의 개수로 store(Redux)에 전달한다.
  const amountChangeHandler = (e: any) => {
    // 입력값이 없어 input의 칸이 비어 있거나(empty), 0 혹은 0보다 작은 값을 전달받았을 경우
    // initialState 값인 1로 state를 새롭게 저장하고, 입력값 1과 같은 개수인 1을 store에 전달한다.
    if (e.target.value.length === 0 || parseInt(e.target.value) <= 0) {
      setEnteredAmount(1);
      dispatch(
        settingIngredientAmount({
          ingredient,
          enteredAmount: 1,
        })
      );
      return;
    }

    // 입력값이 비어 있지 않을 경우 입력값을 숫자로 변환하여 state에 저장하고, store에 전달한다.
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
        <input
          type="number"
          className="text-center"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
    </div>
  );
};

export default React.memo(RecipeIngredient);
