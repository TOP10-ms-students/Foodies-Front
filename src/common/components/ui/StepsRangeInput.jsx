import React from "react";
import { styled } from "styled-components";

import { Button, Select } from "~/common/components";

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledSelect = styled(Select)`
  .ant-select-selector {
    border: none !important;
  }

  .ant-select-selection-item {
    text-align: center;
    padding-right: 0 !important;
  }

  .ant-select-arrow {
    display: none;
  }
`;

export const StepsRangeInput = ({ options, value, setValue }) => {
  const currentIndex = options.findIndex((option) => option.value === value);
  const disableBack = !(currentIndex > 0);
  const disableForward = !(currentIndex < options.length - 1);

  const goBack = () =>
    !disableBack && setValue(options[currentIndex - 1]?.value);

  const goForward = () =>
    !disableForward && setValue(options[currentIndex + 1]?.value);

  return (
    <Box>
      <Button icon="-" disabled={disableBack} onClick={goBack} />

      <StyledSelect
        value={value}
        onChange={setValue}
        options={options}
        width="130px"
      />

      <Button icon="+" disabled={disableForward} onClick={goForward} />
    </Box>
  );
};
