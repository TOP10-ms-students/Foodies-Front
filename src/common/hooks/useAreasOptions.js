import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllAreas } from "~/api/areas";

import { getAreas } from "~/store/selectors";
import { setAreas } from "~/store/slices/options";

export const useAreasOptions = () => {
  const dispatch = useDispatch();

  const storeAreas = useSelector(getAreas);

  const [isLoadingAreas, setIsLoadingAreas] = useState(false);

  useEffect(() => {
    if (storeAreas?.length) return;

    setIsLoadingAreas(true);
    getAllAreas()
      .then(({ data }) => dispatch(setAreas(data?.areas ?? [])))
      .finally(() => setIsLoadingAreas(false));
  }, [storeAreas?.length]);

  const areasOptions = useMemo(
    () =>
      (storeAreas ?? []).map(({ id, name }) => ({
        value: id,
        label: name,
      })),
    [storeAreas]
  );

  return { areasOptions, isLoadingAreas };
};
