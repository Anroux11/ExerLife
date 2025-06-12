import { getAxiosInstace } from "../../(utils)/axiosInstance";
import {
  INITIAL_STATE,
  IClient,
  ClientActionContext,
  ClientStateContext,
} from "./context";
import { ClientReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  getClientsSuccess,
  getClientsPending,
  getClientsError,
  getClientPending,
  getClientError,
  createClientPending,
  createClientSuccess,
  createClientError,
  updateClientError,
  updateClientSuccess,
  updateClientPending,
  deleteClientPending,
  deleteClientSuccess,
  deleteClientError,
} from "./actions";
import axios from "axios";

export const ClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(ClientReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const getClients = async () => {
    dispatch(getClientsPending());
    const endpoint = `https://fakestoreapi.com/products`;
    await axios(endpoint)
      .then((response) => {
        dispatch(getClientsSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getClientsError());
      });
  };

  const getClient = async (id: string) => {
    dispatch(getClientPending());
    const endpoint = `/clients/${id}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getClientsSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getClientError());
      });
  };

  const createClient = async (client: IClient) => {
    dispatch(createClientPending());
    const endpoint = `/api/client`;
    await instance
      .post(endpoint, client)
      .then((response) => {
        dispatch(createClientSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(createClientError());
      });
  };

  const updateClient = async (client: IClient) => {
    dispatch(updateClientPending());
    const endpoint = `/clients/${client.id}`;
    await instance
      .put(endpoint, client)
      .then((response) => {
        dispatch(updateClientSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(updateClientError());
      });
  };

  const deleteClient = async (id: string) => {
    dispatch(deleteClientPending());
    const endpoint = `https://fakestoreapi.com/clients/${id}`;
    await instance
      .delete(endpoint)
      .then((response) => {
        dispatch(deleteClientSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(deleteClientError());
      });
  };

  return (
    <ClientStateContext.Provider value={state}>
      <ClientActionContext.Provider
        value={{
          getClients,
          getClient,
          createClient,
          updateClient,
          deleteClient,
        }}
      >
        {children}
      </ClientActionContext.Provider>
    </ClientStateContext.Provider>
  );
};

export const useClientState = () => {
  const context = useContext(ClientStateContext);
  if (!context) {
    throw new Error("useClientState must be used within a ClientProvider");
  }
  return context;
};

export const useClientActions = () => {
  const context = useContext(ClientActionContext);
  if (!context) {
    throw new Error("useClientActions must be used within a ClientProvider");
  }
  return context;
};
