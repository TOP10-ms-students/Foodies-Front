import { Spin, notification } from "antd";
import React, { useState, useEffect, useMemo, useCallback } from "react";

import { FollowerInfoCard } from "~/common/components/custom/FollowerInfoCard";
import { SmallRecipeCard } from "~/common/components/custom/SmallRecipeCard";
import { Tabs } from "~/common/components/ui/Tabs";

import { getMyRecipes, getRecipes, getFavoriteRecipes } from "~/api/recipes";
import { getUserFollowers, getUserFollowing } from "~/api/user";

import { RecipesList } from "./TabsList.styled";

const TABS = {
  MY_RECIPES: "myRecipes",
  MY_FAVORITES: "myFavorites",
  FOLLOWERS: "followers",
  FOLLOWING: "following",
  RECIPES: "recipes",
};

export const TabsList = ({ isCurrentUser, userId }) => {
  const [activeTab, setActiveTab] = useState(
    isCurrentUser ? TABS.MY_RECIPES : TABS.RECIPES
  );

  const [listItems, setListItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notificationApi, notificationContext] = notification.useNotification();

  const handleTabChange = (key) => {
    setActiveTab(key);
    fetchTabData(key);
  };

  const fetchTabData = useCallback(
    async (key) => {
      setLoading(true);
      setListItems(null);

      try {
        let response;
        switch (key) {
          case TABS.MY_RECIPES:
            response = await getMyRecipes();
            setListItems(response.data.recipes);
            break;
          case TABS.RECIPES:
            response = await getRecipes();
            setListItems(response.data.recipes);
            break;
          case TABS.MY_FAVORITES:
            response = await getFavoriteRecipes();
            setListItems(response.data.recipes);
            break;
          case TABS.FOLLOWERS:
            response = await getUserFollowers(userId);
            setListItems(response.data.followers);
            break;
          case TABS.FOLLOWING:
            response = await getUserFollowing();
            setListItems(response.data.following);
            break;
          default:
            break;
        }

        // TODO - handle pagination
        // response.data.count
      } catch (err) {
        notificationApi.error({
          message: "Error",
          description: err.message || "Failed to fetch data.",
        });
      } finally {
        setLoading(false);
      }
    },
    [userId]
  );

  const onDeleteMyRecipe = (recipeId) => {
    // TODO
  };

  useEffect(() => {
    fetchTabData(activeTab);
  }, [activeTab]);

  const tabItems = useMemo(
    () =>
      isCurrentUser
        ? [
            { label: "My Recipes", key: TABS.MY_RECIPES },
            { label: "My Favorites", key: TABS.MY_FAVORITES },
            { label: "Followers", key: TABS.FOLLOWERS },
            { label: "Following", key: TABS.FOLLOWING },
          ]
        : [
            { label: "Recipes", key: TABS.RECIPES },
            { label: "Followers", key: TABS.FOLLOWERS },
          ],
    [isCurrentUser]
  );

  return (
    <div>
      {notificationContext}

      <Tabs activeKey={activeTab} onChange={handleTabChange} items={tabItems} />

      <div>
        {loading ? (
          <Spin size="large" />
        ) : (
          <>
            {activeTab === TABS.MY_RECIPES ||
            activeTab === TABS.RECIPES ||
            activeTab === TABS.MY_FAVORITES ? (
              <RecipesList>
                {listItems?.length ? (
                  listItems.map((recipe) => (
                    <SmallRecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      {...(isCurrentUser
                        ? { onDelete: () => onDeleteMyRecipe(recipe.id) }
                        : {})}
                    />
                  ))
                ) : (
                  <p>No recipes found.</p>
                )}
              </RecipesList>
            ) : (
              <div>
                {listItems?.length ? (
                  listItems.map((user) => (
                    <FollowerInfoCard
                      key={user.id}
                      userInfo={user}
                      initialFollowing={activeTab === TABS.FOLLOWING}
                    />
                  ))
                ) : (
                  <p>No users found.</p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
