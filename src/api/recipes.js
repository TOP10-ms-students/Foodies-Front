import { api } from "./ApiService";

export const getRecipes = (params) => api.get("recipes/", { params });
