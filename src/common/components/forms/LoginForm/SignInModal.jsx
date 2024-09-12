import React, { useState } from "react";
import { Modal } from "antd";
import { LoginForm } from "~/common/components/forms/LoginForm";
import { SignUpForm } from "~/common/components/forms/SignUpForm";

const SignInModal = ({ visible, onClose, onSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <Modal open={visible} onCancel={onClose} footer={null} centered>
      {isSignUp ? (
        <SignUpForm
          onLinkClick={handleToggle}
          onSuccess={() => {
            onSuccess();
            onClose();
          }}
        />
      ) : (
        <LoginForm onLinkClick={handleToggle} onSuccess={onSuccess} />
      )}
    </Modal>
  );
};

export default SignInModal;
