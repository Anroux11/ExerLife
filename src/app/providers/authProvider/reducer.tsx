import { handleActions } from "redux-actions";
import { IClientRegisterStateContext, ICurrentUserStateContext, INITIAL_STATE_CLIENT, INITIAL_STATE_CURRENT, INITIAL_STATE_TRAINER, INITIAL_STATE_USER, ITrainerRegisterStateContext, IUserLoginStateContext } from "./context";
import { TrainerRegisterActionEnums, ClientRegisterActionEnum, UserLoginActionEnum, CurrentUserActionEnum } from './actions';

export const RegisterTrainerReducer = handleActions<
ITrainerRegisterStateContext
>(
  {
    [TrainerRegisterActionEnums.getRegisterTrainerPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [TrainerRegisterActionEnums.getRegisterTrainerSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [TrainerRegisterActionEnums.getRegisterTrainerError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE_TRAINER
);

export const RegisterClientReducer = handleActions<
  IClientRegisterStateContext
>(
  {
    [ClientRegisterActionEnum.getRegisterClientPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ClientRegisterActionEnum.getRegisterClientSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ClientRegisterActionEnum.getRegisterClientError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE_CLIENT
);

export const UserLoginReducer = handleActions<IUserLoginStateContext>(
  {
    [UserLoginActionEnum.getUserLoginPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserLoginActionEnum.getUserLoginSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserLoginActionEnum.getUserLoginError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE_USER
);

export const CurrentUserReducer = handleActions<ICurrentUserStateContext>(
  {
    [CurrentUserActionEnum.getCurrentUserPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CurrentUserActionEnum.getCurrentUserSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CurrentUserActionEnum.getCurrentUserError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE_CURRENT
);
    
    
    
    
