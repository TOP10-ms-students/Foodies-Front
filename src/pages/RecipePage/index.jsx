import React from "react";
import { useParams } from "react-router-dom";

export const RecipePage = () => {
  const params = useParams();

  return <div>RecipePage. id: {params.id}</div>;
};
