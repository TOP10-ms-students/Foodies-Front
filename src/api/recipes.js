import { api } from "./ApiService";

export const getRecipe = (id) => api.get(`recipes/${id}`);

export const createRecipe = (data) => api.post("recipes", data);

export const getRecipes = (params) => api.get("recipes", { params });

export const getPopularRecipes = () => api.get("recipes/popular");

export const getFavoriteRecipes = () => api.get(`recipes/favorite`);

export const addFavoriteRecipe = (id) => api.post(`recipes/${id}/favorite`);

export const removeFavoriteRecipe = (id) =>
  api.delete(`recipes/${id}/favorite`);

export const getMyRecipes = () => api.get("recipes/my");
