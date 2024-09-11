import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Image,
  Title,
  Description,
  Footer,
  Author,
  AuthorImage,
  Actions,
  FavoriteButton,
  ShareButton,
} from "./RecipeCard.styled";

export const RecipeCard = ({ recipe }) => {
  const [authorInfo, setAuthorInfo] = useState({ name: "", image: "" });

  // Uncomment this code if you want to fetch author info
  // useEffect(() => {
  //   const fetchAuthorInfo = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3001/api/users/${recipe.owner}`
  //       );
  //       setAuthorInfo({
  //         name: response.data.name,
  //         image: response.data.image,
  //       });
  //     } catch (error) {
  //       console.error('Error fetching author info:', error);
  //     }
  //   };
  //
  //   fetchAuthorInfo();
  // }, [recipe.owner]);

  return (
    <Card>
      <Image src={recipe.thumb} alt={recipe.title} />
      <>
        <Title>{recipe.title}</Title>
        <Description>{recipe.description}</Description>
        <Footer>
          <Author>
            <AuthorImage src={authorInfo.image} alt={authorInfo.name} />
            <span>{authorInfo.name}</span>
          </Author>
          <Actions>
            <FavoriteButton>♡</FavoriteButton>
            <ShareButton>↗</ShareButton>
          </Actions>
        </Footer>
      </>
    </Card>
  );
};
