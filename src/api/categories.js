import { api } from "./ApiService";

export const getAllCategories = () => api.get("categories/");

 
