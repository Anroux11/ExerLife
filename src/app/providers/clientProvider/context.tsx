import { createContext } from "react";

// Interface defining the shape of a Product object
// This represents the data structure we expect from the API
export interface IClient {
  id: string;
  name: string;
  email: string;
  contactNumber: number;
  activeState: boolean;
  planType: string;
  trial: boolean;
  date: number
}

// Interface defining the state shape for our context
// This includes status flags and the actual product data
export interface IClientStateContext {
  isPending: boolean; // Loading state
  isSuccess: boolean; // Success state
  isError: boolean; // Error state
  client?: IClient; // Single product data (optional)
}

// Interface defining all the actions that can be performed on our products
// These methods will be implemented in the provider component
export interface IClientActionContext {
  getClients: () => void; // Fetch all products
  getClient: (id: string) => void; // Fetch a single product
  createClient: (client: IClient) => void; // Create a new product
  updateClient: (client: IClient) => void; // Update existing product
  deleteClient: (id: string) => void; // Delete a product
}

// Initial state object that defines the default values for our product context
export const INITIAL_STATE: IClientStateContext = {
  isPending: false, // Indicates if a request is in progress
  isSuccess: false, // Indicates if the last operation was successful
  isError: false, // Indicates if the last operation resulted in an error
};

// Create two separate contexts:
// 1. ProductStateContext - Holds the current state of our products
export const ClientStateContext =
  createContext<IClientStateContext>(INITIAL_STATE);

// 2. ProductActionContext - Holds the methods to interact with our products
export const ClientActionContext = createContext<undefined | IClientActionContext>(
  undefined
);
