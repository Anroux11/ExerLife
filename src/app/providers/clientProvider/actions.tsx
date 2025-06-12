import { createAction } from "redux-actions"
import { IClient, IClientStateContext } from "./context";

// Enum defining the type of actions that can be dispatched
export enum ClientActionEnums {
  // Each operation (get/create/update/delete) has three states:
  // PENDING: Action started
  // SUCCESS: Action completed successfully
  // ERROR: Action failed
  getClientsPending = "GET_CLIENTS_PENDING",
  getClientsSuccess = "GET_CLIENTS_SUCCESS",
  getClientsError = "GET_CLIENTS_ERROR",

  getClientPending = "GET_CLIENT_PENDING",
  getClientSuccess = "GET_CLIENT_SUCCESS",
  getClientError = "GET_CLIENT_ERROR",

  createClientPending = "CREATE_CLIENT_PENDING",
  createClientSuccess = "CREATE_CLIENT_SUCCESS",
  createClientError = "CREATE_CLIENT_ERROR",

  updateClientPending = "UPDATE_CLIENT_PENDING",
  updateClientSuccess = "UPDATE_CLIENT_SUCCESS",
  updateClientError = "UPDATE_CLIENT_ERROR",

  deleteClientPending = "DELETE_CLIENT_PENDING",
  deleteClientSuccess = "DELETE_CLIENT_SUCCESS",
  deleteClientError = "DELETE_CLIENT_ERROR",
}

// createAction<PayloadType>(actionType, payloadCreator)
// - PayloadType: The type of data the action will contain
// - actionType: The string identifier for this action
// - payloadCreator: Function that returns the action payload

// Get All Products Actions
export const getClientsPending = createAction<IClientStateContext>(
  ClientActionEnums.getClientsPending,
  // Returns state object indicating loading started
  () => ({ isPending: true, isSuccess: false, isError: false })
);

// Example of createAction with multiple generic types:
// createAction<ReturnType, PayloadType>
export const getClientsSuccess = createAction<
  IClientStateContext, // What the payload creator returns
  IClient[] // Type of argument passed to payload creator
>(
  ClientActionEnums.getClientsSuccess,
  // Receives products array and returns state with products
  (clients: IClient[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    clients, // Include fetched products in state
  })
);

export const getClientsError = createAction<IClientStateContext>(
  ClientActionEnums.getClientsError,
  // Returns state object indicating error occurred
  () => ({ isPending: false, isSuccess: false, isError: true })
);

// Single Product Actions
// Similar pattern: each action updates the state to reflect the operation status
export const getClientPending = createAction<IClientStateContext>(
  ClientActionEnums.getClientPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getClientSuccess = createAction<IClientStateContext, IClient>(
  ClientActionEnums.getClientSuccess,
  (client: IClient) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    client,
  })
);

export const getClientError = createAction<IClientStateContext>(
  ClientActionEnums.getClientError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createClientPending = createAction<IClientStateContext>(
  ClientActionEnums.createClientPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createClientSuccess = createAction<
  IClientStateContext,
  IClient
>(ClientActionEnums.createClientSuccess, (client: IClient) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  client,
}));

export const createClientError = createAction<IClientStateContext>(
  ClientActionEnums.createClientError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const updateClientPending = createAction<IClientStateContext>(
  ClientActionEnums.updateClientPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const updateClientSuccess = createAction<
  IClientStateContext,
  IClient
>(ClientActionEnums.updateClientSuccess, (client: IClient) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  client,
}));

export const updateClientError = createAction<IClientStateContext>(
  ClientActionEnums.updateClientError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const deleteClientPending = createAction<IClientStateContext>(
  ClientActionEnums.deleteClientPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const deleteClientSuccess = createAction<
  IClientStateContext,
  IClient
>(ClientActionEnums.deleteClientSuccess, (client: IClient) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  client,
}));

export const deleteClientError = createAction<IClientStateContext>(
  ClientActionEnums.deleteClientError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
