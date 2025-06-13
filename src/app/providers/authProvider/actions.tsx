import { createAction } from "redux-actions"
import { ITrainerRegister, ITrainerRegisterStateContext, IClientRegister, IClientRegisterStateContext, IUserLogin, ICurrentUser, IUserLoginStateContext, ICurrentUserStateContext } from "./context";

// Enum defining the type of actions that can be dispatched
export enum TrainerRegisterActionEnums {
  getRegisterTrainerPending = "GET_REGISTER_TRAINER_PENDING",
  getRegisterTrainerSuccess = "GET_REGISTER_TRAINER_SUCCESS",
  getRegisterTrainerError = "GET_REGISTER_TRAINER_ERROR",
}

export enum ClientRegisterActionEnum {
  getRegisterClientPending = "GET_REGISTER_CLIENT_PENDING",
  getRegisterClientSuccess = "GET_REGISTER_CLIENT_SUCCESS",
  getRegisterClientError = "GET_REGISTER_CLIENT_ERROR",
}

export enum UserLoginActionEnum {
  getUserLoginPending = "GET_USER_LOGIN_PENDING",
  getUserLoginSuccess = "GET_USER_LOGIN_SUCCESS",
  getUserLoginError = "GET_USER_LOGIN_ERROR",
}

export enum CurrentUserActionEnum {
  getCurrentUserPending = "GET_CURRENT_USER_PENDING",
  getCurrentUserSuccess = "GET_CURRENT_USER_SUCCESS",
  getCurrentUserError = "GET_CURRENT_USER_ERROR",
}

export const getRegisterTrainerPending = createAction<ITrainerRegisterStateContext>(
  TrainerRegisterActionEnums.getRegisterTrainerPending,
  // Returns state object indicating loading started
  () => ({ isPending: true, isSuccess: false, isError: false })
);

// Example of createAction with multiple generic types:
// createAction<ReturnType, PayloadType>
export const getRegisterTrainerSuccess = createAction<
  ITrainerRegisterStateContext, // What the payload creator returns
  ITrainerRegister[] // Type of argument passed to payload creator
>(
  TrainerRegisterActionEnums.getRegisterTrainerSuccess,
  // Receives products array and returns state with products
  (trainers: ITrainerRegister[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    trainers, // Include fetched products in state
  })
);

export const getRegisterTrainerError = createAction<ITrainerRegisterStateContext>(
  TrainerRegisterActionEnums.getRegisterTrainerError,
  // Returns state object indicating error occurred
  () => ({ isPending: false, isSuccess: false, isError: true })
);



export const getRegisterClientPending = createAction<IClientRegisterStateContext>(
  ClientRegisterActionEnum.getRegisterClientPending,
  // Returns state object indicating loading started
  () => ({ isPending: true, isSuccess: false, isError: false })
);

// Example of createAction with multiple generic types:
// createAction<ReturnType, PayloadType>
export const getRegisterClientSuccess = createAction<
  IClientRegisterStateContext, // What the payload creator returns
  IClientRegister[] // Type of argument passed to payload creator
>(
  ClientRegisterActionEnum.getRegisterClientSuccess,
  // Receives products array and returns state with products
  (clients: IClientRegister[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    clients, // Include fetched products in state
  })
);

export const getRegisterClientError = createAction<IClientRegisterStateContext>(
  ClientRegisterActionEnum.getRegisterClientError,
  // Returns state object indicating error occurred
  () => ({ isPending: false, isSuccess: false, isError: true })
);



export const getUserLoginPending = createAction<IUserLoginStateContext>(
  UserLoginActionEnum.getUserLoginPending,
  // Returns state object indicating loading started
  () => ({ isPending: true, isSuccess: false, isError: false })
);

// Example of createAction with multiple generic types:
// createAction<ReturnType, PayloadType>
export const getUserLoginSuccess = createAction<
  IUserLoginStateContext, // What the payload creator returns
  IUserLogin[] // Type of argument passed to payload creator
>(
  UserLoginActionEnum.getUserLoginSuccess,
  // Receives products array and returns state with products
  (users: IUserLogin[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    users, // Include fetched products in state
  })
);

export const getUserLoginError = createAction<IUserLoginStateContext>(
  UserLoginActionEnum.getUserLoginError,
  // Returns state object indicating error occurred
  () => ({ isPending: false, isSuccess: false, isError: true })
);



export const getCurrentUserPending = createAction<ICurrentUserStateContext>(
  CurrentUserActionEnum.getCurrentUserPending,
  // Returns state object indicating loading started
  () => ({ isPending: true, isSuccess: false, isError: false })
);

// Example of createAction with multiple generic types:
// createAction<ReturnType, PayloadType>
export const getCurrentUserSuccess = createAction<
  ICurrentUserStateContext, // What the payload creator returns
  ICurrentUser[] // Type of argument passed to payload creator
>(
  CurrentUserActionEnum.getCurrentUserSuccess,
  // Receives products array and returns state with products
  (currentuser: ICurrentUser[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    currentuser, // Include fetched products in state
  })
);

export const getCurrentUserError = createAction<ICurrentUserStateContext>(
  CurrentUserActionEnum.getCurrentUserError,
  // Returns state object indicating error occurred
  () => ({ isPending: false, isSuccess: false, isError: true })
);


  // Each operation (get/create/update/delete) has three states:
  // PENDING: Action started
  // SUCCESS: Action completed successfully
  // ERROR: Action failed

  // register Trainer
  // register  Client
  // login Trainer
  // login client
  // get currentUser
  // first three
  // Get All Products Actions
  


  // Example of createAction with multiple generic types:
  // createAction<ReturnType, PayloadType>

  // getCurrentUserPending = "GET_CURRENTUSER_PENDING",
  // getCurrentUserSuccess = "GET_CURRENTUSER_SUCCESS",
  // getCurrentUserError = "GET_CURRENTUSER_ERROR",

  // getTrainersPending = "GET_TRAINERS_PENDING",
  // getTrainersSuccess = "GET_TRAINERS_SUCCESS",
  // getTrainersError = "GET_TRAINERS_ERROR",

  // getTrainerPending = "GET_TRAINER_PENDING",
  // getTrainerSuccess = "GET_TRAINER_SUCCESS",
  // getTrainerError = "GET_TRAINER_ERROR",

  // createTrainerPending = "CREATE_TRAINER_PENDING",
  // createTrainerSuccess = "CREATE_TRAINER_SUCCESS",
  // createTrainerError = "CREATE_TRAINER_ERROR",

  // updateTrainerPending = "UPDATE_TRAINER_PENDING",
  // updateTrainerSuccess = "UPDATE_TRAINER_SUCCESS",
  // updateTrainerError = "UPDATE_TRAINER_ERROR",

  // deleteTrainerPending = "DELETE_TRAINER_PENDING",
  // deleteTrainerSuccess = "DELETE_TRAINER_SUCCESS",
  // deleteTrainerError = "DELETE_TRAINER_ERROR",

// createAction<PayloadType>(actionType, payloadCreator)
// - PayloadType: The type of data the action will contain
// - actionType: The string identifier for this action
// - payloadCreator: Function that returns the action payload

// Single Product Actions
// Similar pattern: each action updates the state to reflect the operation status
