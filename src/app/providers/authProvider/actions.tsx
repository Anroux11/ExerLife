import { createAction } from "redux-actions"
import { ITrainerRegister, ITrainerRegisterStateContext, IClientRegister, IClientRegisterStateContext, IUserLogin, ICurrentUser, IUserLoginStateContext, ICurrentUserStateContext } from "./context";

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
  
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getRegisterTrainerSuccess = createAction<
  ITrainerRegisterStateContext, 
  ITrainerRegister 
>(
  TrainerRegisterActionEnums.getRegisterTrainerSuccess,
  
  (trainer: ITrainerRegister) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    trainer, 
  })
);

export const getRegisterTrainerError = createAction<ITrainerRegisterStateContext>(
  TrainerRegisterActionEnums.getRegisterTrainerError,
 
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getRegisterClientPending = createAction<IClientRegisterStateContext>(
  ClientRegisterActionEnum.getRegisterClientPending,
  
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getRegisterClientSuccess = createAction<
  IClientRegisterStateContext, 
  IClientRegister 
>(
  ClientRegisterActionEnum.getRegisterClientSuccess,
  
  (client: IClientRegister) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    client, 
  })
);

export const getRegisterClientError = createAction<IClientRegisterStateContext>(
  ClientRegisterActionEnum.getRegisterClientError,
  
  () => ({ isPending: false, isSuccess: false, isError: true })
);



export const getUserLoginPending = createAction<IUserLoginStateContext>(
  UserLoginActionEnum.getUserLoginPending,
  
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getUserLoginSuccess = createAction<
  IUserLoginStateContext, 
  IUserLogin
>(
  UserLoginActionEnum.getUserLoginSuccess,
  
  (user: IUserLogin) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    user, 
  })
);

export const getUserLoginError = createAction<IUserLoginStateContext>(
  UserLoginActionEnum.getUserLoginError,
 
  () => ({ isPending: false, isSuccess: false, isError: true })
);



export const getCurrentUserPending = createAction<ICurrentUserStateContext>(
  CurrentUserActionEnum.getCurrentUserPending,
  
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getCurrentUserSuccess = createAction<
  ICurrentUserStateContext, 
  ICurrentUser 
>(
  CurrentUserActionEnum.getCurrentUserSuccess,
  
  (currentuser: ICurrentUser) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    currentuser, 
  })
);

export const getCurrentUserError = createAction<ICurrentUserStateContext>(
  CurrentUserActionEnum.getCurrentUserError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
