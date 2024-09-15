import { notification, Spin } from "antd";
import React, { useEffect, useState, Fragment } from "react";

import { FollowerInfoCard } from "~/common/components/custom/FollowerInfoCard";
import { FollowersDivider } from "~/common/components/custom/TabsList/TabsList.styled";
import { Pagination } from "~/common/components/ui/Pagination";

import { getUserFollowers } from "~/api/user";

import { SMALL_ITEMS_PER_PAGE } from "~/constants/paginationConstants";

export const FollowersTab = ({ userId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [notificationApi] = notification.useNotification();

  const handleCurrentPageChange = (newPage) => setCurrentPage(newPage);

  const fetchFollowers = async () => {
    setLoading(true);

    try {
      const { data } = await getUserFollowers(userId, {
        page: currentPage,
        limit: SMALL_ITEMS_PER_PAGE,
      });

      setFollowers(data.followers);
      setTotalItems(data.count);
    } catch (error) {
      notificationApi.error({
        message: "Error",
        description: error.message || "Failed to fetch followers.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFollowers();
  }, [userId, currentPage]);

  return (
    <>
      {loading && <Spin size="large" />}
      {!loading && (
        <div>
          {followers.length ? (
            followers.map((follower, index) => (
              <Fragment key={follower.id}>
                {index !== 0 && <FollowersDivider />}
                <FollowerInfoCard userInfo={follower} />
              </Fragment>
            ))
          ) : (
            <p>No followers found.</p>
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
