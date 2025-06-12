import { createAction } from "redux-actions"
import { IMealplan, IMealplanStateContext } from "./context";

// Enum defining the type of actions that can be dispatched
export enum MealplanActionEnums {
  // Each operation (get/create/update/delete) has three states:
  // PENDING: Action started
  // SUCCESS: Action completed successfully
  // ERROR: Action failed
  getMealplansPending = "GET_MEALPLANS_PENDING",
  getMealplansSuccess = "GET_MEALPLANS_SUCCESS",
  getMealplansError = "GET_MEALPLANS_ERROR",

  getMealplanPending = "GET_MEALPLAN_PENDING",
  getMealplanSuccess = "GET_MEALPLAN_SUCCESS",
  getMealplanError = "GET_MEALPLAN_ERROR",

  createMealplanPending = "CREATE_MEALPLAN_PENDING",
  createMealplanSuccess = "CREATE_MEALPLAN_SUCCESS",
  createMealplanError = "CREATE_MEALPLAN_ERROR",

  updateMealplanPending = "UPDATE_MEALPLAN_PENDING",
  updateMealplanSuccess = "UPDATE_MEALPLAN_SUCCESS",
  updateMealplanError = "UPDATE_MEALPLAN_ERROR",

  deleteMealplanPending = "DELETE_MEALPLAN_PENDING",
  deleteMealplanSuccess = "DELETE_MEALPLAN_SUCCESS",
  deleteMealplanError = "DELETE_MEALPLAN_ERROR",
}

// createAction<PayloadType>(actionType, payloadCreator)
// - PayloadType: The type of data the action will contain
// - actionType: The string identifier for this action
// - payloadCreator: Function that returns the action payload

// Get All Products Actions
export const getMealplansPending = createAction<IMealplanStateContext>(
  MealplanActionEnums.getMealplansPending,
  // Returns state object indicating loading started
  () => ({ isPending: true, isSuccess: false, isError: false })
);

// Example of createAction with multiple generic types:
// createAction<ReturnType, PayloadType>
export const getMealplansSuccess = createAction<
  IMealplanStateContext, // What the payload creator returns
  IMealplan[] // Type of argument passed to payload creator
>(
  MealplanActionEnums.getMealplansSuccess,
  // Receives products array and returns state with products
  (mealplans: IMealplan[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    mealplans, // Include fetched products in state
  })
);

export const getMealplansError = createAction<IMealplanStateContext>(
  MealplanActionEnums.getMealplansError,
  // Returns state object indicating error occurred
  () => ({ isPending: false, isSuccess: false, isError: true })
);

// Single Product Actions
// Similar pattern: each action updates the state to reflect the operation status
export const getMealplanPending = createAction<IMealplanStateContext>(
  MealplanActionEnums.getMealplanPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getMealplanSuccess = createAction<IMealplanStateContext, IMealplan>(
  MealplanActionEnums.getMealplanSuccess,
  (mealplan: IMealplan) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    mealplan,
  })
);

export const getMealplanError = createAction<IMealplanStateContext>(
  MealplanActionEnums.getMealplanError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createMealplanPending = createAction<IMealplanStateContext>(
  MealplanActionEnums.createMealplanPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createMealplanSuccess = createAction<
  IMealplanStateContext,
  IMealplan
>(MealplanActionEnums.createMealplanSuccess, (mealplan: IMealplan) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  mealplan,
}));

export const createMealplanError = createAction<IMealplanStateContext>(
  MealplanActionEnums.createMealplanError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const updateMealplanPending = createAction<IMealplanStateContext>(
  MealplanActionEnums.updateMealplanPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const updateMealplanSuccess = createAction<
  IMealplanStateContext,
  IMealplan
>(MealplanActionEnums.updateMealplanSuccess, (mealplan: IMealplan) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  mealplan,
}));

export const updateMealplanError = createAction<IMealplanStateContext>(
  MealplanActionEnums.updateMealplanError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const deleteMealplanPending = createAction<IMealplanStateContext>(
  MealplanActionEnums.deleteMealplanPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const deleteMealplanSuccess = createAction<
  IMealplanStateContext,
  IMealplan
>(MealplanActionEnums.deleteMealplanSuccess, (mealplan: IMealplan) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  mealplan,
}));

export const deleteMealplanError = createAction<IMealplanStateContext>(
  MealplanActionEnums.deleteMealplanError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
