import React from "react";
import { Pagination as AntdPagination } from "antd";

export const Pagination = ({
  current,
  total,
  pageSize,
  onChange,
  showSizeChanger = false,
  disabled = false,
}) => {
  return (
    <AntdPagination
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={onChange}
      showSizeChanger={showSizeChanger}
      disabled={disabled}
    />
  );
};
