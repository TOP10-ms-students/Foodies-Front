import { api } from "./ApiService";

export const getRecipes = () => api.get("recipes");

export const getRecipe = (id) => api.get(`recipes/${id}`);

export const createRecipe = (data) => api.post("recipes", data);

<<<<<<< add_categories_and_recipes
export const getRecipes = (params) => api.get("recipes/", { params });
=======
export const getPopularRecipes = () => api.get("recipes/popular");
>>>>>>> main
