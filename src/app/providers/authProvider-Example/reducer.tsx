import { handleActions } from "redux-actions";
import { IClientLoginStateContext, IClientRegisterStateContext, INITIAL_STATE, ITrainerLoginStateContext, ITrainerRegisterStateContext } from "./context";
import { TrainerRegisterActionEnums, ClientRegisterActionEnum, TrainerLoginActionEnum, ClientLoginActionEnum } from './actions';

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
  INITIAL_STATE
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
  INITIAL_STATE
);

export const LoginTrainerReducer = handleActions<
  ITrainerLoginStateContext
>(
  {
    [TrainerLoginActionEnum.getLoginTrainerPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [TrainerLoginActionEnum.getLoginTrainerSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [TrainerLoginActionEnum.getLoginTrainerError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);

export const LoginClientReducer = handleActions<
  IClientLoginStateContext
>(
  {
    [ClientLoginActionEnum.getLoginClientPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ClientLoginActionEnum.getLoginClientSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ClientLoginActionEnum.getLoginClientError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
    
    
    
    
