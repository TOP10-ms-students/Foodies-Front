import React, { useState } from "react";

import { Segmented } from "~/common/components";

const items = [
  { value: "login", label: "Login" },
  { value: "signup", label: "Sign Up" },
];

const AuthBar = ({ handleOpenLogin, handleOpenSignUp }) => {
  const [isLoginActive, setIsLoginActive] = useState(false);

  const onChange = (value) => {
    if (value === "login") {
      handleOpenLogin();
      setIsLoginActive(true);
    } else {
      handleOpenSignUp();
      setIsLoginActive(false);
    }
  };

  return (
    <Segmented
      options={items}
      value={isLoginActive ? "login" : "signup"}
      onChange={onChange}
    />
  );
};

export default AuthBar;
