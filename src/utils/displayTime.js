export const displayTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;

  const displayHours = hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""}` : "";
  const displayMinutes = minutesLeft > 0 ? `${minutesLeft} min` : "";

  return `${displayHours} ${displayMinutes}`;
};
