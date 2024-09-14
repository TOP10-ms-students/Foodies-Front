import { notification, Spin } from "antd";
import React, { useEffect, useState } from "react";

import { FollowerInfoCard } from "~/common/components/custom/FollowerInfoCard";
import { Pagination } from "~/common/components/ui/Pagination";

import { getUserFollowing } from "~/api/user";

import { SMALL_ITEMS_PER_PAGE } from "~/constants/paginationConstants";

export const FollowingTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  const [notificationApi] = notification.useNotification();

  const handleCurrentPageChange = (newPage) => setCurrentPage(newPage);

  const fetchFollowing = async () => {
    setLoading(true);

    try {
      const { data } = await getUserFollowing({
        page: currentPage,
        limit: SMALL_ITEMS_PER_PAGE,
      });
      setFollowing(data.following);
      setTotalItems(data.count);
    } catch (error) {
      notificationApi.error({
        message: "Error",
        description: error.message || "Failed to fetch favorite recipes.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFollowing();
  }, [currentPage]);

  return (
    <>
      {loading && <Spin size="large" />}
      {!loading && (
        <div>
          {following.length ? (
            following.map((followedUser) => (
              <FollowerInfoCard
                key={followedUser.id}
                userInfo={followedUser}
                initialFollowing
              />
            ))
          ) : (
            <p>No following found.</p>
          )}
          <Pagination
            current={currentPage}
            total={totalItems}
            pageSize={SMALL_ITEMS_PER_PAGE}
            onChange={handleCurrentPageChange}
            showSizeChanger={false}
            showQuickJumper
          />
        </div>
      )}
    </>
  );
};
