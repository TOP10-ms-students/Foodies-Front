const COLORS = {
  black: "#050505",
  darkgray: "#1A1A1A",
  gray: "#BFBEBE",
  white: "#FFFFFF",
};

const SIZES = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1440px",
};

export const styledComponentTheme = {
  colors: COLORS,
  sizes: SIZES,
  media: {
    mobile: `(min-width: ${SIZES.mobile})`,
    tablet: `(min-width: ${SIZES.tablet})`,
    desktop: `(min-width: ${SIZES.desktop})`,
  },
};

export const antdTheme = {
  token: {
    colorPrimary: COLORS.black,
    fontFamily: "Mulish, sans-serif",
  },
};
