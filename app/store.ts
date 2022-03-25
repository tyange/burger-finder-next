import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ingredientsSlice from "../features/ingredientsSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
