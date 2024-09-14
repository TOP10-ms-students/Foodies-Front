import { Pagination as AntdPagination } from "antd";
import React from "react";
import styled from "styled-components";

import { DEFAULT_ITEMS_PER_PAGE } from "~/constants/paginationConstants";

const StyledPagintaion = styled(AntdPagination)`
  display: flex;
  justify-content: center;
`;

export const Pagination = ({
  current,
  total,
  onChange,
  showSizeChanger = false,
  disabled = false,
  pageSize = DEFAULT_ITEMS_PER_PAGE,
}) => {
  const hidePagination = total / pageSize <= 1;

  if (hidePagination) return null;

  return (
    <StyledPagintaion
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={onChange}
      showSizeChanger={showSizeChanger}
      disabled={disabled}
    />
  );
};
