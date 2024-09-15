import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllCategories } from "~/api/categories";

import { getCategories } from "~/store/selectors";
import { setCategories } from "~/store/slices/options";

export const useCategoriesOptions = () => {
  const dispatch = useDispatch();

  const storeCategories = useSelector(getCategories);

  const [isLoadingCategories, setIsLoadingCategories] = useState(false);

  useEffect(() => {
    if (storeCategories?.length) return;

    setIsLoadingCategories(true);
    getAllCategories()
      .then(({ data }) => dispatch(setCategories(data?.categories ?? [])))
      .finally(() => setIsLoadingCategories(false));
  }, [storeCategories?.length]);

  const categoriesOptions = useMemo(
    () =>
      (storeCategories ?? []).map(({ id, name }) => ({
        value: id,
        label: name,
      })),
    [storeCategories]
  );

  return { categoriesOptions, isLoadingCategories };
};
