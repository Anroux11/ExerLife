import { getAxiosInstace } from "../../(utils)/axiosInstance";
import {
  INITIAL_STATE,
  IFooditem,
  FooditemActionContext,
  FooditemStateContext,
} from "./context";
import { FooditemReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  getFooditemsSuccess,
  getFooditemsPending,
  getFooditemsError,
  getFooditemPending,
  getFooditemError,
  createFooditemPending,
  createFooditemSuccess,
  createFooditemError,
  updateFooditemError,
  updateFooditemSuccess,
  updateFooditemPending,
  deleteFooditemPending,
  deleteFooditemSuccess,
  deleteFooditemError,
  getFooditemSuccess,
} from "./actions";
import axios from "axios";

export const FooditemProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(FooditemReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const getFooditems = async () => {
    dispatch(getFooditemsPending());
    const endpoint = `https://fakestoreapi.com/fooditems`;
    await axios(endpoint)
      .then((response) => {
        dispatch(getFooditemsSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getFooditemsError());
      });
  };

  const getFooditem = async (id: string) => {
    dispatch(getFooditemPending());
    const endpoint = `/fooditems/${id}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getFooditemSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getFooditemError());
      });
  };

  const createFooditem = async (fooditem: IFooditem) => {
    dispatch(createFooditemPending());
    const endpoint = `/fooditems`;
    await instance
      .post(endpoint, fooditem)
      .then((response) => {
        dispatch(createFooditemSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(createFooditemError());
      });
  };

  const updateFooditem = async (fooditem: IFooditem) => {
    dispatch(updateFooditemPending());
    const endpoint = `/fooditems/${fooditem.name}`;
    await instance
      .put(endpoint, fooditem)
      .then((response) => {
        dispatch(updateFooditemSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(updateFooditemError());
      });
  };

  const deleteFooditem = async (id: string) => {
    dispatch(deleteFooditemPending());
    const endpoint = `https://fakestoreapi.com/fooditems/${id}`;
    await instance
      .delete(endpoint)
      .then((response) => {
        dispatch(deleteFooditemSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(deleteFooditemError());
      });
  };

  return (
    <FooditemStateContext.Provider value={state}>
      <FooditemActionContext.Provider
        value={{
          getFooditems,
          getFooditem,
          createFooditem,
          updateFooditem,
          deleteFooditem,
        }}
      >
        {children}
      </FooditemActionContext.Provider>
    </FooditemStateContext.Provider>
  );
};

export const useFooditemState = () => {
  const context = useContext(FooditemStateContext);
  if (!context) {
    throw new Error("useFooditemState must be used within a FooditemProvider");
  }
  return context;
};

export const useFooditemActions = () => {
  const context = useContext(FooditemActionContext);
  if (!context) {
    throw new Error("useFooditemActions must be used within a FooditemProvider");
  }
  return context;
};
