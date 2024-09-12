import { api } from "./ApiService";

export const getRecipes = () => api.get("recipes");

export const getRecipe = (id) => api.get(`recipes/${id}`);

export const createRecipe = (data) => api.post("recipes", data);
