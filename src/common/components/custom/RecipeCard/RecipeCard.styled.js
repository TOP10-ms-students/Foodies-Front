import styled from "styled-components";

export const Card = styled.div`
  width: 342px;
  height: 366px;
  overflow: hidden;

  @media ${({ theme }) => theme.media.desktop} {
    width: 290px;
    height: 421px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 30px;

  @media ${({ theme }) => theme.media.desktop} {
    height: 275px;
  }
`;


export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  margin: 8px 0;
  font-size: 14px;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
 
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
 
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const Actions = styled.div`
  display: flex;
`;
export const RecipesColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.media.desktop} {
    width: 910px;
  }
`;
export const FavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: transparent;
`;

export const ShareButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: transparent;
`;
