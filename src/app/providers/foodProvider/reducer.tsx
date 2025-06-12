import { handleActions } from "redux-actions";
import { INITIAL_STATE, IFooditemStateContext } from "./context";
import { FooditemActionEnums } from "./actions";

export const FooditemReducer = handleActions<
  IFooditemStateContext,
  IFooditemStateContext
>(
  {
    [FooditemActionEnums.getFooditemsPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FooditemActionEnums.getFooditemsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FooditemActionEnums.getFooditemsError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FooditemActionEnums.getFooditemPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FooditemActionEnums.getFooditemSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FooditemActionEnums.getFooditemError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FooditemActionEnums.createFooditemPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FooditemActionEnums.createFooditemSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FooditemActionEnums.createFooditemError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FooditemActionEnums.updateFooditemPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FooditemActionEnums.updateFooditemSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FooditemActionEnums.updateFooditemError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FooditemActionEnums.deleteFooditemPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FooditemActionEnums.deleteFooditemSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FooditemActionEnums.deleteFooditemError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
