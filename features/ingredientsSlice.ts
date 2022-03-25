import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

// state의 타입 설정
interface ingredientsState {
  ingredients: {
    bread: { lidBun: number; extraBread: number; bottomBun: number };
    vegetable: {
      lettuce: number;
      pickle: number;
      onion: number;
      tomato: number;
    };
    sauce: {
      spicySauce: number;
      bicmacSauce: number;
      teriyakiSauce: number;
      ketchupSauce: number;
      mayoSauce: number;
    };
    patty: {
      chickenPatty: number;
      hamburgPatty: number;
      porkPatty: number;
      beefPatty: number;
      shrimpPatty: number;
      vegetablePatty: number;
    };
    extra: { hashBrown: number; cheese: number };
  };
}

// state 초기화
const initialState: ingredientsState = {
  ingredients: {
    bread: { lidBun: 0, extraBread: 0, bottomBun: 0 },
    vegetable: { lettuce: 0, pickle: 0, onion: 0, tomato: 0 },
    sauce: {
      spicySauce: 0,
      bicmacSauce: 0,
      teriyakiSauce: 0,
      ketchupSauce: 0,
      mayoSauce: 0,
    },
    patty: {
      chickenPatty: 0,
      hamburgPatty: 0,
      porkPatty: 0,
      beefPatty: 0,
      shrimpPatty: 0,
      vegetablePatty: 0,
    },
    extra: { hashBrown: 0, cheese: 0 },
  },
};

//
export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
});

export const selectIngredients = (state: RootState) =>
  state.ingredients.ingredients;

export const getIngredients = createSelector(
  selectIngredients,
  (ingredients) => {
    return ingredients;
  }
);

export default ingredientsSlice.reducer;
