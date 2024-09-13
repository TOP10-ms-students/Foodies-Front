import { api } from "./ApiService";

export const getAllIngredients = () => api.get("ingredients/");
export const getIngredients = (search) => api.get(`ingredients?name=${search}`);

