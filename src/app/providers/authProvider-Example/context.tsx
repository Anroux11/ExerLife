import { createContext } from "react";

// Interface defining the shape of a Product object
// This represents the data structure we expect from the API
export interface ITrainerRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  contactNumber: string;
  planType: string;
  activeState: boolean;
  trial: boolean;
  policiesAccepted: boolean;
}

  // Interface defining the state shape for our context
// This includes status flags and the actual product data
export interface ITrainerRegisterStateContext {
  isPending: boolean; // Loading state
  isSuccess: boolean; // Success state
  isError: boolean; // Error state
  trainer?: ITrainerRegister; // Single product data (optional)
}

// Interface defining all the actions that can be performed on our products
// These methods will be implemented in the provider component
export interface ITrainerRegisterActionContext {
  // getTrainers: () => void; // Fetch all products
  registerTrainer: (id: string) => void; // Fetch a single product
  // createTrainer: (product: ITrainer) => void; // Create a new product
  // updateTrainer: (product: ITrainer) => void; // Update existing product
  // deleteTrainer: (id: string) => void; // Delete a product
}

// Initial state object that defines the default values for our product context
export const INITIAL_STATE_TRAINER: ITrainerRegisterStateContext = {
  isPending: false, // Indicates if a request is in progress
  isSuccess: false, // Indicates if the last operation was successful
  isError: false, // Indicates if the last operation resulted in an error
};

// Create two separate contexts:
// 1. ProductStateContext - Holds the current state of our products
export const TrainerRegisterStateContext =
  createContext<ITrainerRegisterStateContext>(INITIAL_STATE_TRAINER);

// 2. ProductActionContext - Holds the methods to interact with our products
export const TrainerRegisterActionContext =
  createContext<ITrainerRegisterActionContext>(undefined);

export interface IClientRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  contactNumber: string;
  policiesAccepted: boolean;
};

export interface IUserLogin {
  email: string;
  password: string;
};

  // Interface defining the state shape for our context
// This includes status flags and the actual product data
export interface IClientRegisterStateContext {
  isPending: boolean; // Loading state
  isSuccess: boolean; // Success state
  isError: boolean; // Error state
  client?: IClientRegister; // Single product data (optional)
}

// Interface defining all the actions that can be performed on our products
// These methods will be implemented in the provider component
export interface IClientRegsiterActionContext {
  // getTrainers: () => void; // Fetch all products
  getRegisterClient: (id: string) => void; // Fetch a single product
  // createTrainer: (product: ITrainer) => void; // Create a new product
  // updateTrainer: (product: ITrainer) => void; // Update existing product
  // deleteTrainer: (id: string) => void; // Delete a product
}

// Initial state object that defines the default values for our product context
export const INITIAL_STATE_CLIENT: IClientRegisterStateContext = {
  isPending: false, // Indicates if a request is in progress
  isSuccess: false, // Indicates if the last operation was successful
  isError: false, // Indicates if the last operation resulted in an error
};

// Create two separate contexts:
// 1. ProductStateContext - Holds the current state of our products
export const ClientRegisterStateContext =
  createContext<IClientRegisterStateContext>(INITIAL_STATE_CLIENT);

// 2. ProductActionContext - Holds the methods to interact with our products
export const ClientRegisterActionContext =
  createContext<IClientRegsiterActionContext>(undefined);



  // Interface defining the state shape for our context
// This includes status flags and the actual product data
export interface ITrainerLoginStateContext {
  isPending: boolean; // Loading state
  isSuccess: boolean; // Success state
  isError: boolean; // Error state
  trainer?: IUserLogin; // Single product data (optional)
}

// Interface defining all the actions that can be performed on our products
// These methods will be implemented in the provider component
export interface ITrainerLoginActionContext {
  // getTrainers: () => void; // Fetch all products
  loginTrainer: (trainer: IUserLogin) => void; // Fetch a single product
  // createTrainer: (product: ITrainer) => void; // Create a new product
  // updateTrainer: (product: ITrainer) => void; // Update existing product
  // deleteTrainer: (id: string) => void; // Delete a product
}

// Initial state object that defines the default values for our product context
export const INITIAL_STATE_USER: ITrainerLoginStateContext = {
  isPending: false, // Indicates if a request is in progress
  isSuccess: false, // Indicates if the last operation was successful
  isError: false, // Indicates if the last operation resulted in an error
};

// Create two separate contexts:
// 1. ProductStateContext - Holds the current state of our products
export const TrainerLoginStateContext =
  createContext<ITrainerLoginStateContext>(INITIAL_STATE);

// 2. ProductActionContext - Holds the methods to interact with our products
export const TrainerLoginActionContext =
  createContext<ITrainerLoginActionContext>(undefined);



  // Interface defining the state shape for our context
// This includes status flags and the actual product data
export interface IClientLoginStateContext {
  isPending: boolean; // Loading state
  isSuccess: boolean; // Success state
  isError: boolean; // Error state
  client?: IUserLogin; // Single product data (optional)
}

// Interface defining all the actions that can be performed on our products
// These methods will be implemented in the provider component
export interface IClientLoginActionContext {
  // getTrainers: () => void; // Fetch all products
  getLoginClient: (id: string) => void; // Fetch a single product
  // createTrainer: (product: ITrainer) => void; // Create a new product
  // updateTrainer: (product: ITrainer) => void; // Update existing product
  // deleteTrainer: (id: string) => void; // Delete a product
}

// Initial state object that defines the default values for our product context
export const INITIAL_STATE: IClientLoginStateContext = {
  isPending: false, // Indicates if a request is in progress
  isSuccess: false, // Indicates if the last operation was successful
  isError: false, // Indicates if the last operation resulted in an error
};

// Create two separate contexts:
// 1. ProductStateContext - Holds the current state of our products
export const ClientLoginStateContext =
  createContext<IClientLoginStateContext>(INITIAL_STATE);

// 2. ProductActionContext - Holds the methods to interact with our products
export const ClientLoginActionContext =
  createContext<IClientLoginActionContext>(undefined);


