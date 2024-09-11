import { api } from "./ApiService";

export const getAllIngredients = () => api.get("ingredients/");
