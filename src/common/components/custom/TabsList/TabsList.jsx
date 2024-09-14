import { notification } from "antd";
import React, { useState, useMemo } from "react";

import { FollowersTab } from "./components/FollowersTab";
import { FollowingTab } from "./components/FollowingTab";
import { MyFavoritesTab } from "./components/MyFavoritesTab";
import { MyRecipesTab } from "./components/MyRecipesTab";
import { RecipesTab } from "./components/RecipesTab";
import { Tabs } from "~/common/components/ui/Tabs";

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
  const [_, notificationContext] = notification.useNotification();

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

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

  const CONFIG = {
    [TABS.MY_RECIPES]: <MyRecipesTab />,
    [TABS.MY_FAVORITES]: <MyFavoritesTab />,
    [TABS.FOLLOWERS]: <FollowersTab userId={userId} />,
    [TABS.FOLLOWING]: <FollowingTab />,
    [TABS.RECIPES]: <RecipesTab />,
  };

  return (
    <div>
      {notificationContext}
      <Tabs activeKey={activeTab} onChange={handleTabChange} items={tabItems} />
      <div>{CONFIG[activeTab]}</div>
    </div>
  );
};
