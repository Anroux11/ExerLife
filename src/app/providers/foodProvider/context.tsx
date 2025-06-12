import { createContext } from "react";

// Interface defining the shape of a Product object
// This represents the data structure we expect from the API
export interface IFooditem {
  name: string;
  category: string;
  servingSize: number;
  protein: number;
  carbs: number;
  sugar: number;
  fat: number;
  fiber: number;
  sodium: number;
  potassium: number;
  cholesterol: number;
  energy: number;
}

// Interface defining the state shape for our context
// This includes status flags and the actual product data
export interface IFooditemStateContext {
  isPending: boolean; // Loading state
  isSuccess: boolean; // Success state
  isError: boolean; // Error state
  fooditem?: IFooditem; // Single product data (optional)
}

// Interface defining all the actions that can be performed on our products
// These methods will be implemented in the provider component
export interface IFooditemActionContext {
  getFooditems: () => void; // Fetch all products
  getFooditem: (id: string) => void; // Fetch a single product
  createFooditem: (product: IFooditem) => void; // Create a new product
  updateFooditem: (product: IFooditem) => void; // Update existing product
  deleteFooditem: (id: string) => void; // Delete a product
}

// Initial state object that defines the default values for our product context
export const INITIAL_STATE: IFooditemStateContext = {
  isPending: false, // Indicates if a request is in progress
  isSuccess: false, // Indicates if the last operation was successful
  isError: false, // Indicates if the last operation resulted in an error
};

// Create two separate contexts:
// 1. ProductStateContext - Holds the current state of our products
export const FooditemStateContext =
  createContext<IFooditemStateContext>(INITIAL_STATE);

// 2. ProductActionContext - Holds the methods to interact with our products
export const FooditemActionContext =
  createContext<IFooditemActionContext>(undefined);
