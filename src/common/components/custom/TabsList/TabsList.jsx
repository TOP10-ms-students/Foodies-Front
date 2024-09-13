import { Spin, notification } from "antd";
import React, { useState, useEffect } from "react";

import { RecipeCard } from "~/common/components/custom/RecipeCard";
import { UserInfoCard } from "~/common/components/custom/UserInfoCard";
import { Tabs } from "~/common/components/ui/Tabs";

export const TabsList = ({ isCurrentUser, userId }) => {
  const [activeTab, setActiveTab] = useState(
    isCurrentUser ? "myRecipes" : "recipes"
  );
  const [listItems, setListItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notificationApi, notificationContext] = notification.useNotification();

  const handleTabChange = (key) => {
    setActiveTab(key);
    fetchTabData(key);
  };

  const fetchTabData = async (key) => {
    setLoading(true);
    setListItems(null);

    try {
      let response;
      switch (key) {
        case "myRecipes":
          response = await fetch(`/recipes/my`);
          break;
        case "recipes":
          response = await fetch(``);
          break;
        case "myFavorites":
          response = await fetch(`/recipes/favorite`);
          break;
        case "followers":
          response = await fetch(`/users/${userId}/followers`);
          break;
        case "following":
          response = await fetch(`/users/following`);
          break;
        default:
          break;
      }

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Error fetching data");
      setListItems(data);
    } catch (err) {
      notificationApi.error({
        message: "Error",
        description: err.message || "Failed to fetch data.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTabData(activeTab);
  }, [activeTab]);

  const tabItems = isCurrentUser
    ? [
        { label: "My Recipes", key: "myRecipes" },
        { label: "My Favorites", key: "myFavorites" },
        { label: "Followers", key: "followers" },
        { label: "Following", key: "following" },
      ]
    : [
        { label: "Recipes", key: "recipes" },
        { label: "Followers", key: "followers" },
      ];

  return (
    <div>
      {notificationContext}

      <Tabs activeKey={activeTab} onChange={handleTabChange} items={tabItems} />

      <div>
        {loading ? (
          <Spin size="large" />
        ) : (
          <>
            {activeTab === "myRecipes" ||
            activeTab === "recipes" ||
            activeTab === "myFavorites" ? (
              <div>
                {listItems?.length ? (
                  listItems.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))
                ) : (
                  <p>No recipes found.</p>
                )}
              </div>
            ) : (
              <div>
                {listItems?.length ? (
                  listItems.map((user) => (
                    <UserInfoCard
                      key={user.id}
                      userInfo={user}
                      isCurrentUser={isCurrentUser}
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
