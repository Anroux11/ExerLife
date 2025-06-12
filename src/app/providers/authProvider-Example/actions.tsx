import { createAction } from "redux-actions"
import { ITrainerRegister, ITrainerRegisterStateContext, IClientRegister, IClientRegisterStateContext, ITrainerLoginStateContext, ITrainerLogin, IClientLoginStateContext, IClientLogin } from "./context";

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

export enum TrainerLoginActionEnum {
  getLoginTrainerPending = "GET_LOGIN_TRAINER_PENDING",
  getLoginTrainerSuccess = "GET_LOGIN_TRAINER_SUCCESS",
  getLoginTrainerError = "GET_LOGIN_TRAINER_ERROR",
}

export enum ClientLoginActionEnum {
  getLoginClientPending = "GET_LOGIN_CLIENT_PENDING",
  getLoginClientSuccess = "GET_LOGIN_CLIENT_SUCCESS",
  getLoginClientError = "GET_LOGIN_CLIENT_ERROR",
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
  (client: IClientRegister) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    client, // Include fetched products in state
  })
);

export const getRegisterClientError = createAction<IClientRegisterStateContext>(
  ClientRegisterActionEnum.getRegisterClientError,
  // Returns state object indicating error occurred
  () => ({ isPending: false, isSuccess: false, isError: true })
);



export const getLoginTrainerPending = createAction<ITrainerLoginStateContext>(
  TrainerLoginActionEnum.getLoginTrainerPending,
  // Returns state object indicating loading started
  () => ({ isPending: true, isSuccess: false, isError: false })
);

// Example of createAction with multiple generic types:
// createAction<ReturnType, PayloadType>
export const getLoginTrainerSuccess = createAction<
  ITrainerLoginStateContext, // What the payload creator returns
  ITrainerLogin[] // Type of argument passed to payload creator
>(
  TrainerLoginActionEnum.getLoginTrainerSuccess,
  // Receives products array and returns state with products
  (trainers: ITrainerLogin[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    trainers, // Include fetched products in state
  })
);

export const getLoginTrainerError = createAction<ITrainerLoginStateContext>(
  TrainerLoginActionEnum.getLoginTrainerError,
  // Returns state object indicating error occurred
  () => ({ isPending: false, isSuccess: false, isError: true })
);



export const getLoginClientPending = createAction<IClientLoginStateContext>(
  ClientLoginActionEnum.getLoginClientPending,
  // Returns state object indicating loading started
  () => ({ isPending: true, isSuccess: false, isError: false })
);

// Example of createAction with multiple generic types:
// createAction<ReturnType, PayloadType>
export const getLoginClientSuccess = createAction<
  IClientLoginStateContext, // What the payload creator returns
  IClientLogin[] // Type of argument passed to payload creator
>(
  ClientLoginActionEnum.getLoginClientSuccess,
  // Receives products array and returns state with products
  (clients: IClientLogin[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    clients, // Include fetched products in state
  })
);

export const getLoginClientError = createAction<IClientLoginStateContext>(
  ClientLoginActionEnum.getLoginClientError,
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
