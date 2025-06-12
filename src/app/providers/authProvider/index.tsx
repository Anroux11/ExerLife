import { getAxiosInstace } from "../../(utils)/axiosInstance";
import {
  INITIAL_STATE,
  TrainerRegisterStateContext,
  TrainerRegisterActionContext,
  ClientRegisterStateContext,
  ClientRegisterActionContext,
  TrainerLoginStateContext,
  TrainerLoginActionContext,
  ClientLoginStateContext,
  ClientLoginActionContext,
} from "./context";
import {
  LoginClientReducer,
  LoginTrainerReducer,
  RegisterClientReducer,
  RegisterTrainerReducer,
} from "./reducer";
import { useContext, useReducer } from "react";
import {
  getRegisterTrainerPending,
  getRegisterTrainerSuccess,
  getRegisterTrainerError,
  getRegisterClientSuccess,
  getRegisterClientPending,
  getRegisterClientError,
  getLoginTrainerSuccess,
  getLoginTrainerPending,
  getLoginTrainerError,
  getLoginClientPending,
  getLoginClientSuccess,
  getLoginClientError,
} from "./actions";

export const TrainerRegisterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(RegisterTrainerReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const getRegisterTrainer = async (id: string) => {
    dispatch(getRegisterTrainerPending());
    const endpoint = `/trainers/${id}`;
    await instance
      .get(endpoint)
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
          getRegisterTrainer,
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
  const [state, dispatch] = useReducer(RegisterClientReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const getRegisterClient = async (id: string) => {
    dispatch(getRegisterClientPending());
    const endpoint = `/Clients/${id}`;
    await instance
      .get(endpoint)
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
          getRegisterClient,
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

export const TrainerLoginProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(LoginTrainerReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const getLoginTrainer = async (id: string) => {
    dispatch(getLoginTrainerPending());
    const endpoint = `/trainers/${id}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getLoginTrainerSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getLoginTrainerError());
      });
  };

  return (
    <TrainerLoginStateContext.Provider value={state}>
      <TrainerLoginActionContext.Provider
        value={{
          getLoginTrainer,
        }}
      >
        {children}
      </TrainerLoginActionContext.Provider>
    </TrainerLoginStateContext.Provider>
  );
};

export const useLoginTrainertState = () => {
  const context = useContext(TrainerLoginStateContext);
  if (!context) {
    throw new Error(
      "useLoginTrainerState must be used within a LoginTrainerProvider"
    );
  }
  return context;
};

export const useLoginTrainerActions = () => {
  const context = useContext(TrainerLoginActionContext);
  if (!context) {
    throw new Error(
      "useLoginTrainerActions must be used within a LoginTrainerProvider"
    );
  }
  return context;
};

export const ClientLoginProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(LoginClientReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const getLoginClient = async (id: string) => {
    dispatch(getLoginClientPending());
    const endpoint = `/Trainers/${id}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getLoginClientSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getLoginClientError());
      });
  };

  return (
    <ClientLoginStateContext.Provider value={state}>
      <ClientLoginActionContext.Provider
        value={{
          getLoginClient,
        }}
      >
        {children}
      </ClientLoginActionContext.Provider>
    </ClientLoginStateContext.Provider>
  );
};

export const useLoginClienttState = () => {
  const context = useContext(ClientLoginStateContext);
  if (!context) {
    throw new Error(
      "useLoginClientState must be used within a LoginClientProvider"
    );
  }
  return context;
};

export const useLoginClientActions = () => {
  const context = useContext(ClientLoginActionContext);
  if (!context) {
    throw new Error(
      "useLoginClientActions must be used within a LoginClientProvider"
    );
  }
  return context;
};

// const createTrainer = async (trainer: ITrainer) => {
//   dispatch(createTrainerPending());
//   const endpoint = `/trainers`;
//   await instance
//     .post(endpoint, trainer)
//     .then((response) => {
//       dispatch(createTrainerSuccess(response.data));
//     })
//     .catch((error) => {
//       console.error(error);
//       dispatch(createTrainerError());
//     });
// };

// const updateTrainer = async (trainer: ITrainer) => {
//   dispatch(updateTrainerPending());
//   const endpoint = `/trainers/${trainer.id}`;
//   await instance
//     .put(endpoint, trainer)
//     .then((response) => {
//       dispatch(updateTrainerSuccess(response.data));
//     })
//     .catch((error) => {
//       console.error(error);
//       dispatch(updateTrainerError());
//     });
// };

// const deleteTrainer = async (id: string) => {
//   dispatch(deleteTrainerPending());
//   const endpoint = `https://fakestoreapi.com/trainers/${id}`;
//   await instance
//     .delete(endpoint)
//     .then((response) => {
//       dispatch(deleteTrainerSuccess(response.data));
//     })
//     .catch((error) => {
//       console.error(error);
//       dispatch(deleteTrainerError());
//     });
// };
