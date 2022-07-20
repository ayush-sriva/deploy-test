import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  interface Palette {
    structural: Palette["primary"];
    greyColors: Palette["primary"];
    accent: Palette["primary"];
    textColor: Palette["primary"];
  }

  interface PaletteOptions {
    structural?: PaletteOptions["primary"];
    greyColors?: PaletteOptions["primary"];
    accent?: PaletteOptions["primary"];
    textColor?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    primary600?: string;
    primary500?: string;
    primary400?: string;
    primary300?: string;
    primary200?: string;
    primary100?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    grey400?: string;
    grey200?: string;
    grey100?: string;
    white?: string;
    linear1?: string;
    linear2?: string;
    color1?: string;
    color2?: string;
    color3?: string;
  }

  interface SimplePaletteColorOptions {
    primary600?: string;
    primary500?: string;
    primary400?: string;
    primary300?: string;
    primary200?: string;
    primary100?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    grey400?: string;
    grey200?: string;
    grey100?: string;
    white?: string;
    linear1?: string;
    linear2?: string;
    color1?: string;
    color2?: string;
    color3?: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading1: true;
    heading2: true;
    subtitle1: true;
    subtitle2: true;
    body1: true;
    body2: true;
    caption1: true;
    caption2: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    heading1: {
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "48px",
      textTransform: "none",
      fontFamily: "Montserrat",
    },

    heading2: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "30px",
      textTransform: "none",
      fontFamily: "Montserrat",
    },

    subtitle1: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
      textTransform: "none",
      fontFamily: "Montserrat",
    },

    subtitle2: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      textTransform: "none",
      fontFamily: "Montserrat",
    },

    body1: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "22px",
      textTransform: "none",
      fontFamily: "Montserrat",
    },

    body2: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "22px",
      textTransform: "none",
      fontFamily: "Montserrat",
    },

    caption1: {
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: "16px",
      textTransform: "none",
      fontFamily: "Montserrat",
    },

    caption2: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
      textTransform: "none",
      fontFamily: "Montserrat",
    },
  },

  palette: {
    primary: {
      main: "#0B6D62",
      light: '#30A193',
      primary500: "#1B877A",
      primary400: "#30A193",
      primary300: "#4ABAAD",
      primary200: "#77EDDF",
      primary100: "#B3FFF6",
    },
    text: {
      primary: "#373C38",
      secondary: "#656E66",
      disabled: "#94A196",
    },
    textColor: {
      main: "#000000",
      highEmphasis: "#373C38",
      mediumEmphasis: "#656E66",
      lowEmphasis: "#94A196",
    },
    greyColors: {
      main: "#D6D6D6",
      grey200: "#E9EBE9",
      grey100: "#F7F7F7",
    },
    structural: {
      main: "#FFFFFF",
      linear1: "linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)",
      linear2: "linear-gradient(143.84deg, #E0FFE5 0%, #FFFAEA 102.58%)",
      color1: "#E8FFFC",
      color2: "#E7FCE0",
      color3: "#F5FFF7",
    },
    accent: {
      main: "#FFFFFF",
      color1: "#ED8F02",
      color2: "#FF725E",
    },
  },
});

export default theme;

export const EXTRA_COLORS = {
  neutralShade: {
    "300": "linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)",
    "200": "linear-gradient(143.84deg, #E0FFE5 0%, #FFFAEA 102.58%)",
    "400": "#E8FFFC",
    "500": "#E7FCE0",
    "100": "#F5FFF7",
    "600": "#77EDDF",
    "700": "#FFFFFF",
    "800": "#E5E5E5",
  },
  primary: {
    "400": "#30A193",
    "1000": "#EFFFFD",
  },

  grey: {
    "400": "#D6D6D6",
  },
  accent: {
    "100": "#ED8F02",
    "200": "#FF725E",
  },
  text: {
    primary: "#373C38",
  },
};
