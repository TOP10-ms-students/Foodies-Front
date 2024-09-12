import { api } from "./ApiService";

export const createRecipe = (data) => api.post("recipes", data);

export const getRecipes = (params) => api.get("recipes/", { params });
