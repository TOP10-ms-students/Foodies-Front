const MAX_SECONDS = 60 * 5;
const INTERVAL_SECONDS = 5;

/*
 * The COOKING_TIME_OPTIONS value is an array of objects, where each object represents a cooking time option.
 * The options are calculated based on the MAX_SECONDS constant, which is set to 5 minutes (60 * 5). The array starts with a INTERVAL_SECONDS value and increments by INTERVAL_SECONDS seconds up to the maximum value.
 *
 * Example: [{ value: 5, label: "5min" }, { value: 10, label: "10min" },{ value: 15, label: "15min" }]
 */
export const COOKING_TIME_OPTIONS = [
  ...Array.from(
    { length: (MAX_SECONDS - INTERVAL_SECONDS) / INTERVAL_SECONDS + 1 },
    (_, i) => INTERVAL_SECONDS + i * INTERVAL_SECONDS
  ).map((value) => {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    return {
      value,
      label: `${hours > 0 ? `${hours}h` : ""} ${minutes > 0 ? `${minutes}min` : ""}`,
    };
  }),
].sort((a, b) => a.value - b.value);
