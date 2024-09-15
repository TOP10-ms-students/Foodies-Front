import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  getFavoriteRecipes,
  addFavoriteRecipe,
  removeFavoriteRecipe,
} from "~/api/recipes.js";

import { getIsAuthenticated } from "~/store/selectors";

import { handleFavoriteApi } from "../../utils/apiHelpers";

const useFavoriteRecipes = (notificationApi) => {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [isLoadingFavorite, setIsLoadingFavorite] = useState(false);
  const [loadingRecipeId, setLoadingRecipeId] = useState(null);

  const isAuth = useSelector(getIsAuthenticated);

  const getAllFavorite = async () => {
    if (!isAuth) {
      return;
    }
    const data = await handleFavoriteApi(
      getFavoriteRecipes,
      null,
      notificationApi,
      setIsLoadingFavorite
    );
    if (data) {
      setFavoriteIds(data?.recipes.map(({ id }) => id));
    }
  };

  useEffect(() => {
    getAllFavorite();
  }, [isAuth]);

  const addFavorite = async (id) => {
    setLoadingRecipeId(id);
    const data = await handleFavoriteApi(
      () => addFavoriteRecipe(id),
      "Add to favorites successfully!",
      notificationApi,
      setIsLoadingFavorite
    );
    if (data) {
      setFavoriteIds((prev) => [...prev, id]);
      setLoadingRecipeId(null);
    }
  };

  const removeFavorite = async (id) => {
    setLoadingRecipeId(id);
    const data = await handleFavoriteApi(
      () => removeFavoriteRecipe(id),
      "Removed from favorites successfully!",
      notificationApi,
      setIsLoadingFavorite
    );
    if (data) {
      setFavoriteIds((prev) => prev.filter((elId) => elId !== id));
      setLoadingRecipeId(null);
    }
  };

  const switchFavorite = (id) => {
    const isFavorite = favoriteIds.includes(id);
    isFavorite ? removeFavorite(id) : addFavorite(id);
  };

  return {
    favoriteIds,
    isLoadingFavorite,
    getAllFavorite,
    addFavorite,
    removeFavorite,
    switchFavorite,
    loadingRecipeId,
  };
};

export default useFavoriteRecipes;
