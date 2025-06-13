import { createContext } from "react";

// Interface defining the shape of a Product object
// This represents the data structure we expect from the API
export interface IMealplan {
  name: string;
  client: string;
  trainer: string;
  clientName: string;
  description: string;
  notes: string;
  clientNotes: [];
  meals: IMeal[];
  mealTotals: IMealTotal[];
}

export interface IMeal {
  name: string;
  id?: number;
  note: string;
  clientNotes: [];
  items: IMealItem[];
  itemTotals: IMealTotal[];
}


export interface IMealItem {
  name: string;
  quantity: number;
  unit: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  note: string;
}

export interface IMealTotal{
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
}


// Interface defining the state shape for our context
// This includes status flags and the actual product data
export interface IMealplanStateContext {
  isPending: boolean; // Loading state
  isSuccess: boolean; // Success state
  isError: boolean; // Error state
  mealplan?: IMealplan; // Single product data (optional)
}

// Interface defining all the actions that can be performed on our products
// These methods will be implemented in the provider component
export interface IMealplanActionContext {
  getMealplans: () => void; // Fetch all products
  getMealplan: (id: string) => void; // Fetch a single product
  createMealplan: (mealplan: IMealplan) => void; // Create a new product
  updateMealplan: (mealplan: IMealplan) => void; // Update existing product
  deleteMealplan: (id: string) => void; // Delete a product
}

// Initial state object that defines the default values for our product context
export const INITIAL_STATE: IMealplanStateContext = {
  isPending: false, // Indicates if a request is in progress
  isSuccess: false, // Indicates if the last operation was successful
  isError: false, // Indicates if the last operation resulted in an error
};

// Create two separate contexts:
// 1. ProductStateContext - Holds the current state of our products
export const MealplanStateContext =
  createContext<IMealplanStateContext>(INITIAL_STATE);

// 2. ProductActionContext - Holds the methods to interact with our products
export const MealplanActionContext = createContext<undefined | IMealplanActionContext>(
  undefined
);
