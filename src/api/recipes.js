import { api } from "./ApiService";

export const createRecipe = (data) => api.post("recipes", data);
