import { createAction } from "redux-actions"
import { IFooditem, IFooditemStateContext } from "./context";

// Enum defining the type of actions that can be dispatched
export enum FooditemActionEnums {
  // Each operation (get/create/update/delete) has three states:
  // PENDING: Action started
  // SUCCESS: Action completed successfully
  // ERROR: Action failed
  getFooditemsPending = "GET_FOODITEMS_PENDING",
  getFooditemsSuccess = "GET_FOODITEMS_SUCCESS",
  getFooditemsError = "GET_FOODITEMS_ERROR",

  getFooditemPending = "GET_FOODITEM_PENDING",
  getFooditemSuccess = "GET_FOODITEM_SUCCESS",
  getFooditemError = "GET_FOODITEM_ERROR",

  createFooditemPending = "CREATE_FOODITEM_PENDING",
  createFooditemSuccess = "CREATE_FOODITEM_SUCCESS",
  createFooditemError = "CREATE_FOODITEM_ERROR",

  updateFooditemPending = "UPDATE_FOODITEM_PENDING",
  updateFooditemSuccess = "UPDATE_FOODITEM_SUCCESS",
  updateFooditemError = "UPDATE_FOODITEM_ERROR",

  deleteFooditemPending = "DELETE_FOODITEM_PENDING",
  deleteFooditemSuccess = "DELETE_FOODITEM_SUCCESS",
  deleteFooditemError = "DELETE_FOODITEM_ERROR",
}

// createAction<PayloadType>(actionType, payloadCreator)
// - PayloadType: The type of data the action will contain
// - actionType: The string identifier for this action
// - payloadCreator: Function that returns the action payload

// Get All Products Actions
export const getFooditemsPending = createAction<IFooditemStateContext>(
  FooditemActionEnums.getFooditemsPending,
  // Returns state object indicating loading started
  () => ({ isPending: true, isSuccess: false, isError: false })
);

// Example of createAction with multiple generic types:
// createAction<ReturnType, PayloadType>
export const getFooditemsSuccess = createAction<
  IFooditemStateContext, // What the payload creator returns
  IFooditem[] // Type of argument passed to payload creator
>(
  FooditemActionEnums.getFooditemsSuccess,
  // Receives products array and returns state with products
  (fooditems: IFooditem[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    fooditems, // Include fetched products in state
  })
);

export const getFooditemsError = createAction<IFooditemStateContext>(
  FooditemActionEnums.getFooditemsError,
  // Returns state object indicating error occurred
  () => ({ isPending: false, isSuccess: false, isError: true })
);

// Single Product Actions
// Similar pattern: each action updates the state to reflect the operation status
export const getFooditemPending = createAction<IFooditemStateContext>(
  FooditemActionEnums.getFooditemPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getFooditemSuccess = createAction<IFooditemStateContext, IFooditem>(
  FooditemActionEnums.getFooditemSuccess,
  (fooditem: IFooditem) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    fooditem,
  })
);

export const getFooditemError = createAction<IFooditemStateContext>(
  FooditemActionEnums.getFooditemError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createFooditemPending = createAction<IFooditemStateContext>(
  FooditemActionEnums.createFooditemPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createFooditemSuccess = createAction<
  IFooditemStateContext,
  IFooditem
>(FooditemActionEnums.createFooditemSuccess, (fooditem: IFooditem) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  fooditem,
}));

export const createFooditemError = createAction<IFooditemStateContext>(
  FooditemActionEnums.createFooditemError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const updateFooditemPending = createAction<IFooditemStateContext>(
  FooditemActionEnums.updateFooditemPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const updateFooditemSuccess = createAction<
  IFooditemStateContext,
  IFooditem
>(FooditemActionEnums.updateFooditemSuccess, (fooditem: IFooditem) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  fooditem,
}));

export const updateFooditemError = createAction<IFooditemStateContext>(
  FooditemActionEnums.updateFooditemError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const deleteFooditemPending = createAction<IFooditemStateContext>(
  FooditemActionEnums.deleteFooditemPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const deleteFooditemSuccess = createAction<
  IFooditemStateContext,
  IFooditem
>(FooditemActionEnums.deleteFooditemSuccess, (fooditem: IFooditem) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  fooditem,
}));

export const deleteFooditemError = createAction<IFooditemStateContext>(
  FooditemActionEnums.deleteFooditemError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
