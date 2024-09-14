import { message, Upload, Typography } from "antd";
import React, { useState } from "react";
import { styled } from "styled-components";

import { CameraIcon } from "~/common/components/icons";

const StyledUpload = styled(Upload)`
  .ant-upload {
    width: 100% !important;
    height: 314px !important;
    border-radius: 30px !important;
    overflow: hidden;

    @media ${({ theme }) => theme.media.tablet} {
      height: 400px !important;
    }

    @media ${({ theme }) => theme.media.desktop} {
      max-width: 550px;
    }
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
`;

const StyledCameraIcon = styled(CameraIcon)`
  width: 38px;
  height: 38px;
`;

const TextButton = styled(Typography.Text)`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-decoration: underline;
  color: inherit;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
  }
`;

const ChangePhotoBox = styled.div`
  position: relative;
  width: fit-content;
  margin: 16px auto 0;

  @media ${({ theme }) => theme.media.tablet} {
    margin: 20px auto 0;
  }
`;

const UploadAnotherInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export const UploadPhoto = ({ imageFile, setImageFile, initImageUrl }) => {
  const [imageUrl, setImageUrl] = useState(initImageUrl ?? null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    file && beforeUpload(file);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }

    const newImageUrl = URL.createObjectURL(file);
    setImageUrl(newImageUrl);
    setImageFile(file);

    return false;
  };

  return (
    <div>
      <StyledUpload
        name="avatar"
        listType="picture-card"
        showUploadList={false}
        beforeUpload={beforeUpload}
      >
        {imageUrl ? (
          <StyledImg src={imageUrl} alt="avatar" />
        ) : (
          <Placeholder>
            <StyledCameraIcon />
            <TextButton>Upload a photo</TextButton>
          </Placeholder>
        )}
      </StyledUpload>

      {imageFile && (
        <ChangePhotoBox>
          <TextButton>Upload another photo</TextButton>
          <UploadAnotherInput
            id="file"
            type="file"
            onChange={handleFileChange}
          />
        </ChangePhotoBox>
      )}
    </div>
  );
};
