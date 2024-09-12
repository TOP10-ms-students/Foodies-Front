import styled from "styled-components";

export const PathInfo = styled.div`
  /* a,
  span {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  } */
`;

export const RecipeInfo = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 0;
  color: #1a1a1a;
`;

export const RecipeMainInfo = styled.div`
  margin-top: 40px;

  img {
    width: 100%;
    height: 400px;
    border-radius: 30px;
  }
`;

export const RecipeIngredients = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 32px;

    li {
      min-width: 152px;
      height: 75px;
      display: flex;
      align-items: center;

      flex-direction: row;
      img {
        width: 75px;
        height: 75px;
        margin-right: 10px;
      }

      div {
        align-items: start;
        flex-direction: column;
        p {
          width: 70px;
          text-align: start;
          font-size: 14px;
          font-weight: 600;
        }
        span {
          font-size: 14px;
          color: ${({ theme }) => theme?.colors?.gray};
        }
      }
    }
  }
`;

export const RecipePreparation = styled.div``;

export const PopularRecipes = styled.div``;
