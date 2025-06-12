import { createAction } from "redux-actions"
import { ITrainer, ITrainerStateContext } from "./context";

// Enum defining the type of actions that can be dispatched
export enum TrainerActionEnums {
  // Each operation (get/create/update/delete) has three states:
  // PENDING: Action started
  // SUCCESS: Action completed successfully
  // ERROR: Action failed
  // getTrainersPending = "GET_TRAINERS_PENDING",
  // getTrainersSuccess = "GET_TRAINERS_SUCCESS",
  // getTrainersError = "GET_TRAINERS_ERROR",

  getTrainerPending = "GET_TRAINER_PENDING",
  getTrainerSuccess = "GET_TRAINER_SUCCESS",
  getTrainerError = "GET_TRAINER_ERROR",

  createTrainerPending = "CREATE_TRAINER_PENDING",
  createTrainerSuccess = "CREATE_TRAINER_SUCCESS",
  createTrainerError = "CREATE_TRAINER_ERROR",

  updateTrainerPending = "UPDATE_TRAINER_PENDING",
  updateTrainerSuccess = "UPDATE_TRAINER_SUCCESS",
  updateTrainerError = "UPDATE_TRAINER_ERROR",

  deleteTrainerPending = "DELETE_TRAINER_PENDING",
  deleteTrainerSuccess = "DELETE_TRAINER_SUCCESS",
  deleteTrainerError = "DELETE_TRAINER_ERROR",
}

// createAction<PayloadType>(actionType, payloadCreator)
// - PayloadType: The type of data the action will contain
// - actionType: The string identifier for this action
// - payloadCreator: Function that returns the action payload

// Get All Products Actions
export const getTrainersPending = createAction<ITrainerStateContext>(
  TrainerActionEnums.getTrainersPending,
  // Returns state object indicating loading started
  () => ({ isPending: true, isSuccess: false, isError: false })
);

// Example of createAction with multiple generic types:
// createAction<ReturnType, PayloadType>
export const getTrainersSuccess = createAction<
  ITrainerStateContext, // What the payload creator returns
  ITrainer[] // Type of argument passed to payload creator
>(
  TrainerActionEnums.getTrainersSuccess,
  // Receives products array and returns state with products
  (trainers: ITrainer[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    trainers, // Include fetched products in state
  })
);

export const getTrainersError = createAction<ITrainerStateContext>(
  TrainerActionEnums.getTrainersError,
  // Returns state object indicating error occurred
  () => ({ isPending: false, isSuccess: false, isError: true })
);

// Single Product Actions
// Similar pattern: each action updates the state to reflect the operation status
export const getTrainerPending = createAction<ITrainerStateContext>(
  TrainerActionEnums.getTrainerPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getTrainerSuccess = createAction<ITrainerStateContext, ITrainer>(
  TrainerActionEnums.getTrainerSuccess,
  (trainer: ITrainer) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    trainer,
  })
);

export const getTrainerError = createAction<ITrainerStateContext>(
  TrainerActionEnums.getTrainerError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createTrainerPending = createAction<ITrainerStateContext>(
  TrainerActionEnums.createTrainerPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createTrainerSuccess = createAction<
  ITrainerStateContext,
  ITrainer
>(TrainerActionEnums.createTrainerSuccess, (trainer: ITrainer) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  trainer,
}));

export const createTrainerError = createAction<ITrainerStateContext>(
  TrainerActionEnums.createTrainerError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const updateTrainerPending = createAction<ITrainerStateContext>(
  TrainerActionEnums.updateTrainerPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const updateTrainerSuccess = createAction<
  ITrainerStateContext,
  ITrainer
>(TrainerActionEnums.updateTrainerSuccess, (trainer: ITrainer) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  trainer,
}));

export const updateTrainerError = createAction<ITrainerStateContext>(
  TrainerActionEnums.updateTrainerError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const deleteTrainerPending = createAction<ITrainerStateContext>(
  TrainerActionEnums.deleteTrainerPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const deleteTrainerSuccess = createAction<
  ITrainerStateContext,
  ITrainer
>(TrainerActionEnums.deleteTrainerSuccess, (trainer: ITrainer) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  trainer,
}));

export const deleteTrainerError = createAction<ITrainerStateContext>(
  TrainerActionEnums.deleteTrainerError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
