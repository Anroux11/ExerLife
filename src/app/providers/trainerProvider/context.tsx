import { createContext } from "react";

// Interface defining the shape of a Product object
// This represents the data structure we expect from the API
export interface ITrainer {
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
export interface ITrainerStateContext {
  isPending: boolean; // Loading state
  isSuccess: boolean; // Success state
  isError: boolean; // Error state
  trainer?: ITrainer; // Single product data (optional)
}

// Interface defining all the actions that can be performed on our products
// These methods will be implemented in the provider component
export interface ITrainerActionContext {
  getTrainer: (id: string) => void; // Fetch a single product
  createTrainer: (trainer: ITrainer) => void; // Create a new product
  updateTrainer: (trainer: ITrainer) => void; // Update existing product
  deleteTrainer: (id: string) => void; // Delete a product
}

// Initial state object that defines the default values for our product context
export const INITIAL_STATE: ITrainerStateContext = {
  isPending: false, // Indicates if a request is in progress
  isSuccess: false, // Indicates if the last operation was successful
  isError: false, // Indicates if the last operation resulted in an error
};

// Create two separate contexts:
// 1. ProductStateContext - Holds the current state of our products
export const TrainerStateContext =
  createContext<ITrainerStateContext>(INITIAL_STATE);

// 2. ProductActionContext - Holds the methods to interact with our products
export const TrainerActionContext = createContext<undefined | ITrainerActionContext>(
  undefined
);
