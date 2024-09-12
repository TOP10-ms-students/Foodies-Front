import { api } from "./ApiService";

export const getIngredients = (search) => api.get(`ingredients?name=${search}`);
