import React from "react";
import { Pagination as AntdPagination } from "antd";
import styled from "styled-components";

const StyledPagintaion = styled(AntdPagination)`
  display: flex;
  justify-content: center;
`;

export const Pagination = ({
  current,
  total,
  pageSize,
  onChange,
  showSizeChanger = false,
  disabled = false,
}) => {
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
