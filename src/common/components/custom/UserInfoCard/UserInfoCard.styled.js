import { Skeleton } from "antd";
import { styled } from "styled-components";

import { Avatar } from "~/common/components";

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 30px;
  max-width: 343px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 394px;
  }

  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const CustomAvatar = styled(Avatar)`
  margin-bottom: 16px;
  width: 80px;
  height: 80px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 120px;
    height: 120px;
  }

  svg {
    width: 40px;
    height: 40px;

    @media ${({ theme }) => theme.media.tablet} {
      width: 60px;
      height: 60px;
    }
  }
`;

export const PlusIcon = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.black};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    width 0.3s ease,
    height 0.3s ease;

  svg {
    color: white;
    transition: font-size 0.3s ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 38px;
    height: 38px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const UserName = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: -0.02em;
  margin-bottom: 16px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const UserInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const UserDetail = styled.li`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const UserDetailNumber = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const SkeletonAvatar = styled(Skeleton.Avatar)`
  .ant-skeleton-avatar {
    width: 80px !important;
    height: 80px !important;

    @media ${({ theme }) => theme.media.tablet} {
      width: 120px !important;
      height: 120px !important;
    }
  }

  margin-bottom: 16px;
`;

export const SkeletonNumber = styled(Skeleton.Input)`
  .ant-skeleton-input {
    display: block;
    width: 30px !important;
    min-width: 30px !important;
  }
`;
