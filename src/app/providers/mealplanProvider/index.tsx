import { getAxiosInstace } from "../../(utils)/axiosInstance";
import {
  INITIAL_STATE,
  IMealplan,
  MealplanActionContext,
  MealplanStateContext,
} from "../clientProvider copy/context";
import { MealplanReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  getMealplansSuccess,
  getMealplansPending,
  getMealplansError,
  getMealplanPending,
  getMealplanError,
  createMealplanPending,
  createMealplanSuccess,
  createMealplanError,
  updateMealplanError,
  updateMealplanSuccess,
  updateMealplanPending,
  deleteMealplanPending,
  deleteMealplanSuccess,
  deleteMealplanError,
} from "../clientProvider copy/actions";
import axios from "axios";

export const MealplanProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(MealplanReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const getMealplans = async () => {
    dispatch(getMealplansPending());
    const endpoint = `https://fakestoreapi.com/mealplans`;
    await axios(endpoint)
      .then((response) => {
        dispatch(getMealplansSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getMealplansError());
      });
  };

  const getMealplan = async (id: string) => {
    dispatch(getMealplanPending());
    const endpoint = `/mealplans/${id}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getMealplansSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getMealplanError());
      });
  };

  const createMealplan = async (mealplan: IMealplan) => {
    dispatch(createMealplanPending());
    const endpoint = `/mealplans`;
    await instance
      .post(endpoint, mealplan)
      .then((response) => {
        dispatch(createMealplanSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(createMealplanError());
      });
  };

  const updateMealplan = async (mealplan: IMealplan) => {
    dispatch(updateMealplanPending());
    const endpoint = `/mealplans/${mealplan.name}`;
    await instance
      .put(endpoint, mealplan)
      .then((response) => {
        dispatch(updateMealplanSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(updateMealplanError());
      });
  };

  const deleteMealplan = async (id: string) => {
    dispatch(deleteMealplanPending());
    const endpoint = `https://fakestoreapi.com/mealplans/${id}`;
    await instance
      .delete(endpoint)
      .then((response) => {
        dispatch(deleteMealplanSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(deleteMealplanError());
      });
  };

  return (
    <MealplanStateContext.Provider value={state}>
      <MealplanActionContext.Provider
        value={{
          getMealplans,
          getMealplan,
          createMealplan,
          updateMealplan,
          deleteMealplan,
        }}
      >
        {children}
      </MealplanActionContext.Provider>
    </MealplanStateContext.Provider>
  );
};

export const useMealplanState = () => {
  const context = useContext(MealplanStateContext);
  if (!context) {
    throw new Error("useMealplanState must be used within a MealplanProvider");
  }
  return context;
};

export const useMealplanActions = () => {
  const context = useContext(MealplanActionContext);
  if (!context) {
    throw new Error(
      "useMealplanActions must be used within a MealplanProvider"
    );
  }
  return context;
};
