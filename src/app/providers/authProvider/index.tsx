import { getAxiosInstace } from "../../(utils)/axiosInstance";
import {
  TrainerRegisterStateContext,
  TrainerRegisterActionContext,
  ClientRegisterStateContext,
  ClientRegisterActionContext,
  UserLoginStateContext,
  UserLoginActionContext,
  CurrentUserStateContext,
  CurrentUserActionContext,
  INITIAL_STATE_TRAINER,
  INITIAL_STATE_CLIENT,
  INITIAL_STATE_USER,
  INITIAL_STATE_CURRENT,
  ITrainerRegister,
  IClientRegister,
  IUserLogin,
} from "./context";
import {
  CurrentUserReducer,
  RegisterClientReducer,
  RegisterTrainerReducer,
  UserLoginReducer,
} from "./reducer";
import { useContext, useReducer } from "react";
import {
  getRegisterTrainerPending,
  getRegisterTrainerSuccess,
  getRegisterTrainerError,
  getRegisterClientSuccess,
  getRegisterClientPending,
  getRegisterClientError,
  getUserLoginPending,
  getUserLoginSuccess,
  getUserLoginError,
  getCurrentUserPending,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./actions";

export const TrainerRegisterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(RegisterTrainerReducer, INITIAL_STATE_TRAINER);
  const instance = getAxiosInstace();

  const registerTrainer = async (payload: ITrainerRegister) => {
    dispatch(getRegisterTrainerPending());
    const endpoint = `/api/users/register`;
    await instance
      .post(endpoint, payload)
      .then((response) => {
        dispatch(getRegisterTrainerSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getRegisterTrainerError());
      });
  };

  return (
    <TrainerRegisterStateContext.Provider value={state}>
      <TrainerRegisterActionContext.Provider
        value={{
          registerTrainer,
        }}
      >
        {children}
      </TrainerRegisterActionContext.Provider>
    </TrainerRegisterStateContext.Provider>
  );
};

export const useRegisterTrainerState = () => {
  const context = useContext(TrainerRegisterStateContext);
  if (!context) {
    throw new Error(
      "useRegisterTrainerState must be used within a RegisterTrainerProvider"
    );
  }
  return context;
};

export const useRegisterTrainerActions = () => {
  const context = useContext(TrainerRegisterActionContext);
  if (!context) {
    throw new Error(
      "useRegisterTrainerActions must be used within a RegisterTrainerProvider"
    );
  }
  return context;
};

export const ClientRegisterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(RegisterClientReducer, INITIAL_STATE_CLIENT);
  const instance = getAxiosInstace();

  const registerClient = async (payload: IClientRegister) => {
    dispatch(getRegisterClientPending());
    const endpoint = `/api/users/register/mobile`;
    await instance
      .post(endpoint, payload)
      .then((response) => {
        dispatch(getRegisterClientSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getRegisterClientError());
      });
  };

  return (
    <ClientRegisterStateContext.Provider value={state}>
      <ClientRegisterActionContext.Provider
        value={{
          registerClient,
        }}
      >
        {children}
      </ClientRegisterActionContext.Provider>
    </ClientRegisterStateContext.Provider>
  );
};

export const useRegisterClientState = () => {
  const context = useContext(TrainerRegisterStateContext);
  if (!context) {
    throw new Error(
      "useRegisterClientState must be used within a RegisterClientProvider"
    );
  }
  return context;
};

export const useRegisterClientActions = () => {
  const context = useContext(TrainerRegisterActionContext);
  if (!context) {
    throw new Error(
      "useRegisterClientActions must be used within a RegisterClientProvider"
    );
  }
  return context;
};

export const UserLoginProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(UserLoginReducer, INITIAL_STATE_USER);
  const instance = getAxiosInstace();

  const userLogin = async (payload: IUserLogin) => {
    dispatch(getUserLoginPending());
    const endpoint = ` /api/users/login`;
    await instance
      .post(endpoint, payload)
      .then((response) => {
        dispatch(getUserLoginSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getUserLoginError());
      });
  };

  return (
    <UserLoginStateContext.Provider value={state}>
      <UserLoginActionContext.Provider
        value={{
          userLogin,
        }}
      >
        {children}
      </UserLoginActionContext.Provider>
    </UserLoginStateContext.Provider>
  );
};

export const useUserLoginState = () => {
  const context = useContext(UserLoginStateContext);
  if (!context) {
    throw new Error(
      "useUserLoginState must be used within a UserLoginProvider"
    );
  }
  return context;
};

export const useUserLoginActions = () => {
  const context = useContext(UserLoginActionContext);
  if (!context) {
    throw new Error(
      "useUserLoginActions must be used within a UserLoginProvider"
    );
  }
  return context;
};

export const CurrentUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(CurrentUserReducer, INITIAL_STATE_CURRENT);
  const instance = getAxiosInstace();

  const currentUser = async () => {
    dispatch(getCurrentUserPending());
    const endpoint = `/api/users/current`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getCurrentUserSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getCurrentUserError());
      });
  };

  return (
    <CurrentUserStateContext.Provider value={state}>
      <CurrentUserActionContext.Provider
        value={{
          currentUser,
        }}
      >
        {children}
      </CurrentUserActionContext.Provider>
    </CurrentUserStateContext.Provider>
  );
};

export const useCurrentUsertState = () => {
  const context = useContext(CurrentUserStateContext);
  if (!context) {
    throw new Error(
      "useCurrentUserState must be used within a CurrentUserProvider"
    );
  }
  return context;
};

export const useCurrentUserActions = () => {
  const context = useContext(CurrentUserActionContext);
  if (!context) {
    throw new Error(
      "useCurrentUserActions must be used within a CurrentUserProvider"
    );
  }
  return context;
};