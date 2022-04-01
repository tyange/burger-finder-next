import { PayloadAction } from "./../node_modules/@reduxjs/toolkit/src/createAction";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const ingredientKind = {
  BREAD: "bread",
  VEGETABLE: "vegetable",
  SAUCE: "sauce",
  PATTY: "patty",
  EXTRA: "extra",
};

export const allIngredients = [
  {
    name: "bun",
    kind: ingredientKind.BREAD,
    amount: 0,
  },
  {
    name: "lettuce",
    kind: ingredientKind.VEGETABLE,
    amount: 0,
  },
  {
    name: "pickle",
    kind: ingredientKind.VEGETABLE,
    amount: 0,
  },
  {
    name: "onion",
    kind: ingredientKind.VEGETABLE,
    amount: 0,
  },
  {
    name: "tomato",
    kind: ingredientKind.VEGETABLE,
    amount: 0,
  },
  {
    name: "spicy-sauce",
    kind: ingredientKind.SAUCE,
    amount: 0,
  },
  {
    name: "bicmac-sauce",
    kind: ingredientKind.SAUCE,
    amount: 0,
  },
  {
    name: "teriyaki-sauce",
    kind: ingredientKind.SAUCE,
    amount: 0,
  },
  {
    name: "ketchup-sauce",
    kind: ingredientKind.SAUCE,
    amount: 0,
  },
  {
    name: "mayo-sauce",
    kind: ingredientKind.SAUCE,
    amount: 0,
  },
  {
    name: "chicken-patty",
    kind: ingredientKind.PATTY,
    amount: 0,
  },
  {
    name: "hamburg-patty",
    kind: ingredientKind.PATTY,
    amount: 0,
  },
  {
    name: "pork-patty",
    kind: ingredientKind.PATTY,
    amount: 0,
  },
  {
    name: "beef-patty",
    kind: ingredientKind.PATTY,
    amount: 0,
  },
  {
    name: "shrimp-patty",
    kind: ingredientKind.PATTY,
    amount: 0,
  },
  {
    name: "vegetable-patty",
    kind: ingredientKind.PATTY,
    amount: 0,
  },
  {
    name: "hash-brown",
    kind: ingredientKind.EXTRA,
    amount: 0,
  },
  {
    name: "cheese",
    kind: ingredientKind.EXTRA,
    amount: 0,
  },
];

export type Ingredient = { name: string; kind: string; amount: number };

export type Ingredients = Ingredient[];

// state 초기화
const initialState: Ingredients = [];

//
export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    addIngredient(state: Ingredients, action: PayloadAction<Ingredient>) {
      const targetIngredientIndex = state.findIndex(
        (ingredient) => ingredient.name === action.payload.name
      );

      if (targetIngredientIndex !== -1) {
        state[targetIngredientIndex].amount += 1;
        return;
      }

      state.push({ ...action.payload, amount: 1 });
    },
    addOneIngredient(state: Ingredients, action: PayloadAction<Ingredient>) {
      const targetIngredientIndex = state.findIndex(
        (ingredient) => ingredient.name === action.payload.name
      );

      state[targetIngredientIndex].amount += 1;
    },
    removeOneIngredient(state: Ingredients, action: PayloadAction<Ingredient>) {
      const targetIngredientIndex = state.findIndex(
        (ingredient) => ingredient.name === action.payload.name
      );

      if (state[targetIngredientIndex].amount === 1) {
        state.splice(targetIngredientIndex, 1);
        return;
      }

      state[targetIngredientIndex].amount -= 1;
    },
  },
});

export const selectIngredients = (state: RootState) => state;

export const getIngredients = createSelector(
  selectIngredients,
  (ingredients) => {
    return ingredients;
  }
);

export const { addIngredient, addOneIngredient, removeOneIngredient } =
  ingredientsSlice.actions;

export default ingredientsSlice.reducer;
