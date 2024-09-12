import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const PathInfo = styled.div``;

const RecipeInfo = styled.div``;

const RecipeMainInfo = styled.div``;

const RecipeIngredients = styled.div`
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

      a {
        width: 100%;
        color: ${({ theme }) => theme?.colors?.black};
        font-weight: 500;
        padding: 8px;
        border-radius: 30px;
        text-decoration: none;
        &:hover {
          background-color: ${({ theme }) => theme?.colors?.gray};
        }
      }
      div {
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
  }
`;

const RecipePreparation = styled.div``;

const PopularRecipes = styled.div``;

export const RecipePage = () => {
  const params = useParams();

  return (
    <div>
      RecipePage. id: {params.id}
      <PathInfo>PathInfo</PathInfo>
      <RecipeInfo>
        <RecipeMainInfo>RecipeMainInfo</RecipeMainInfo>
        <RecipeIngredients>
          <h2> Ingredients</h2>
          <ul>
            <li>
              <a href="">
                <div>
                  <img src="" alt="" />
                  <div>
                    <p>name</p>
                    <span>quantity</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div>
                  <img src="" alt="" />
                  <div>
                    <p>name</p>
                    <span>quantity</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div>
                  <img src="" alt="" />
                  <div>
                    <p>name</p>
                    <span>quantity</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div>
                  <img src="" alt="" />
                  <div>
                    <p>name</p>
                    <span>quantity</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </RecipeIngredients>
        <RecipePreparation>RecipePreparation</RecipePreparation>
      </RecipeInfo>
      <PopularRecipes>PopularRecipes</PopularRecipes>
    </div>
  );
};
