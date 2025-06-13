import { handleActions } from "redux-actions";
import {
  INITIAL_STATE,
  IMealplanStateContext,
} from "./context";
import { MealplanActionEnums } from "./actions";

export const MealplanReducer = handleActions<
  IMealplanStateContext,
  IMealplanStateContext
>(
  {
    [MealplanActionEnums.getMealplansPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionEnums.getMealplansSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionEnums.getMealplansError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionEnums.getMealplanPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionEnums.getMealplanSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionEnums.getMealplanError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionEnums.createMealplanPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionEnums.createMealplanSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionEnums.createMealplanError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionEnums.updateMealplanPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionEnums.updateMealplanSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionEnums.updateMealplanError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionEnums.deleteMealplanPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionEnums.deleteMealplanSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionEnums.deleteMealplanError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
