import { useSearchParams } from "react-router-dom";

export const useCategoriesQueries = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  const setCategory = (category) => {
    setSearchParams({ category });
  };

  const resetCategory = () => {
    setSearchParams({});
  };

  return {
    category,
    setCategory,
    resetCategory,
  };
};
