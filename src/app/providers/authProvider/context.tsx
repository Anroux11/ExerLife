import { createContext } from "react";

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
export interface ITrainerRegisterStateContext {
  isPending: boolean; 
  isSuccess: boolean; 
  isError: boolean; 
  trainer?: ITrainerRegister; 
}
export interface ITrainerRegisterActionContext {
  // getTrainers: () => void; // Fetch all products
  registerTrainer: (payload: ITrainerRegister) => void; // Fetch a single product
  // createTrainer: (product: ITrainer) => void; // Create a new product
  // updateTrainer: (product: ITrainer) => void; // Update existing product
  // deleteTrainer: (id: string) => void; // Delete a product
}

export const INITIAL_STATE_TRAINER: ITrainerRegisterStateContext = {
  isPending: false, // Indicates if a request is in progress
  isSuccess: false, // Indicates if the last operation was successful
  isError: false, // Indicates if the last operation resulted in an error
};

export const TrainerRegisterStateContext =
  createContext<ITrainerRegisterStateContext>(INITIAL_STATE_TRAINER);

export const TrainerRegisterActionContext = createContext<
  undefined | ITrainerRegisterActionContext
>(undefined);


export interface IClientRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  contactNumber: string;
  policiesAccepted: boolean;
};

export interface IClientRegisterStateContext {
  isPending: boolean; // Loading state
  isSuccess: boolean; // Success state
  isError: boolean; // Error state
  client?: IClientRegister; // Single product data (optional)
}
export interface IClientRegsiterActionContext {
  // getTrainers: () => void; // Fetch all products
  registerClient: (payload: IClientRegister) => void; // Fetch a single product
  // createTrainer: (product: ITrainer) => void; // Create a new product
  // updateTrainer: (product: ITrainer) => void; // Update existing product
  // deleteTrainer: (id: string) => void; // Delete a product
}

export const INITIAL_STATE_CLIENT: IClientRegisterStateContext = {
  isPending: false, // Indicates if a request is in progress
  isSuccess: false, // Indicates if the last operation was successful
  isError: false, // Indicates if the last operation resulted in an error
};

export const ClientRegisterStateContext =
  createContext<IClientRegisterStateContext>(INITIAL_STATE_CLIENT);


export const ClientRegisterActionContext = createContext<
  undefined | IClientRegsiterActionContext
>(undefined);


export interface IUserLogin {
  email: string;
  password: string;
};
export interface IUserLoginStateContext {
  isPending: boolean; // Loading state
  isSuccess: boolean; // Success state
  isError: boolean; // Error state
  user?: IUserLogin; // Single product data (optional)
}

export interface IUserLoginActionContext {
  // getTrainers: () => void; // Fetch all products
  userLogin: (payload: IUserLogin) => void; // Fetch a single product
  // createTrainer: (product: ITrainer) => void; // Create a new product
  // updateTrainer: (product: ITrainer) => void; // Update existing product
  // deleteTrainer: (id: string) => void; // Delete a product
}

export const INITIAL_STATE_USER: IUserLoginStateContext = {
  isPending: false, // Indicates if a request is in progress
  isSuccess: false, // Indicates if the last operation was successful
  isError: false, // Indicates if the last operation resulted in an error
};

export const UserLoginStateContext =
  createContext<IUserLoginStateContext>(INITIAL_STATE_USER);

export const UserLoginActionContext =
  createContext<undefined|IUserLoginActionContext>(undefined);

export interface ICurrentUser {
  id: string;
  name: string;
  email: string;
  role: string;
  contactNumber: number;
  activeState: boolean;
  planType: string;
  trial: boolean;
  date: string;
}
export interface ICurrentUserStateContext {
  isPending: boolean; // Loading state
  isSuccess: boolean; // Success state
  isError: boolean; // Error state
  currentUser?: ICurrentUser; // Single product data (optional)
}
export interface ICurrentUserActionContext {
  // getTrainers: () => void; // Fetch all products
  currentUser: () => void; // Fetch a single product
  // createTrainer: (product: ITrainer) => void; // Create a new product
  // updateTrainer: (product: ITrainer) => void; // Update existing product
  // deleteTrainer: (id: string) => void; // Delete a product                                                                                                                       
}

export const INITIAL_STATE_CURRENT: ICurrentUserStateContext = {
  isPending: false, // Indicates if a request is in progress
  isSuccess: false, // Indicates if the last operation was successful
  isError: false, // Indicates if the last operation resulted in an error
};

export const CurrentUserStateContext = createContext<ICurrentUserStateContext>(
  INITIAL_STATE_CURRENT
);

export const CurrentUserActionContext =
  createContext<undefined|ICurrentUserActionContext>(undefined);


