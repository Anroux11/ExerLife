import { getAxiosInstace } from "../../(utils)/axiosInstance";
import {
  INITIAL_STATE,
  ITrainer,
  TrainerActionContext,
  TrainerStateContext,
} from "./context";
import { TrainerReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  getTrainersSuccess,
  getTrainersPending,
  getTrainersError,
  getTrainerPending,
  getTrainerError,
  createTrainerPending,
  createTrainerSuccess,
  createTrainerError,
  updateTrainerError,
  updateTrainerSuccess,
  updateTrainerPending,
  deleteTrainerPending,
  deleteTrainerSuccess,
  deleteTrainerError,
} from "./actions";
import axios from "axios";

export const TrainerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(TrainerReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const getTrainers = async () => {
    dispatch(getTrainersPending());
    const endpoint = `https://fakestoreapi.com/products`;
    await axios(endpoint)
      .then((response) => {
        dispatch(getTrainersSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getTrainersError());
      });
  };

  const getTrainer = async (id: string) => {
    dispatch(getTrainerPending());
    const endpoint = `/trainers/${id}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getTrainersSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getTrainerError());
      });
  };

  const createTrainer = async (trainer: ITrainer) => {
    dispatch(createTrainerPending());
    const endpoint = `/trainers`;
    await instance
      .post(endpoint, trainer)
      .then((response) => {
        dispatch(createTrainerSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(createTrainerError());
      });
  };

  const updateTrainer = async (trainer: ITrainer) => {
    dispatch(updateTrainerPending());
    const endpoint = `/trainers/${trainer.id}`;
    await instance
      .put(endpoint, trainer)
      .then((response) => {
        dispatch(updateTrainerSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(updateTrainerError());
      });
  };

  const deleteTrainer = async (id: string) => {
    dispatch(deleteTrainerPending());
    const endpoint = `https://fakestoreapi.com/trainers/${id}`;
    await instance
      .delete(endpoint)
      .then((response) => {
        dispatch(deleteTrainerSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(deleteTrainerError());
      });
  };

  return (
    <TrainerStateContext.Provider value={state}>
      <TrainerActionContext.Provider
        value={{
          getTrainers,
          getTrainer,
          createTrainer,
          updateTrainer,
          deleteTrainer,
        }}
      >
        {children}
      </TrainerActionContext.Provider>
    </TrainerStateContext.Provider>
  );
};

export const useTrainerState = () => {
  const context = useContext(TrainerStateContext);
  if (!context) {
    throw new Error("useTrainerState must be used within a TrainerProvider");
  }
  return context;
};

export const useTrainerActions = () => {
  const context = useContext(TrainerActionContext);
  if (!context) {
    throw new Error("useTrainerActions must be used within a TrainerProvider");
  }
  return context;
};
