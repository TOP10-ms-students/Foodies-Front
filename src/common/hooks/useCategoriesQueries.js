import { useSearchParams } from "react-router-dom";

export const useCategoriesQueries = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryName = searchParams.get("category");
  const categoryId = searchParams.get("id");

  const setCategory = (category) => {
    setSearchParams({ category: category.name, id: category.id });
  };

  const resetCategory = () => {
    setSearchParams({});
  };

  return {
    categoryName,
    categoryId,
    setCategory,
    resetCategory,
  };
};
