import React from "react";
import { useParams } from "react-router-dom";

export const ProfilePage = () => {
  const params = useParams();

  return <div>ProfilePage. id: {params.id}</div>;
};
