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
    const data = await handleFavoriteApi(
      () => addFavoriteRecipe(id),
      "Add to favorites successfully!",
      notificationApi,
      setIsLoadingFavorite
    );
    if (data) {
      setFavoriteIds((prev) => [...prev, id]);
    }
  };

  const removeFavorite = async (id) => {
    const data = await handleFavoriteApi(
      () => removeFavoriteRecipe(id),
      "Removed from favorites successfully!",
      notificationApi,
      setIsLoadingFavorite
    );
    if (data) {
      setFavoriteIds((prev) => prev.filter((elId) => elId !== id));
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
  };
};

export default useFavoriteRecipes;
