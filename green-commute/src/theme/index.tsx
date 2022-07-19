/**
 * @author Abhishek Bhemisetty <abhishek.bhemisetty@zemosolabs.com>
 */

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    greyScale: Palette['primary'];
  }
  interface PaletteOptions {
    greyScale: PaletteOptions['primary'];
  }
  interface PaletteColor {
    semilight?: string;
    darker?: string;
    normal?: string;
  }
  interface SimplePaletteColorOptions {
    semilight?: string;
    darker?: string;
    normal?: string;
  }
  interface TypographyVariants {
    captionBold: React.CSSProperties;
    body3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    captionBold?: React.CSSProperties;
    body3?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    captionBold: true;
    body3: true;
  }
}

const theme = createTheme({
  components: {
    MuiAvatar: {
      styleOverrides: {
        colorDefault: ({ ownerState }) => ({
          marginRight: '10px',
          ...(ownerState.alt === 'Future' && {
            backgroundColor: '#F7F7F7',
            color: '#373C38',
          }),
          ...(ownerState.alt === 'Current' && {
            backgroundColor: '#4ABAAD',
            color: '#FFF',
          }),
        }),
        img: ({ ownerState }) => ({
          ...(ownerState.alt === 'Past' && {
            backgroundColor: '#4ABAAD',
            color: '#FFF',
          }),
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        subtitle1: ({ ownerState }) => ({
          marginTop: '8px',
          ...(ownerState.align === 'justify' && {
              color: `#373C38`,
            } &&
            ownerState.color === 'Current' && {
              color: '#4ABAAD',
            }),
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.id === 'outlined-basic' && {
            border: 'none',
          }),
        }),
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        avatar: {
          height: '40px',
          width: '60px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
        },
        containedPrimary: ({ ownerState }) => ({
          ...(ownerState.size === 'medium' && {
            width: '140px',
            height: '46px',
            textTransform: 'none',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#4ABAAD',
            },
          }),
          ...(ownerState.size === 'small' && {
            width: '100px',
            height: '32px',
            textTransform: 'none',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#4ABAAD',
            },
          }),
          ...(ownerState.size === 'large' && {
            height: '40px',
            textTransform: 'none',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#4ABAAD',
            },
          }),
        }),
        outlinedPrimary: ({ ownerState }) => ({
          ...(ownerState.size === 'medium' && {
            width: '100px',
            height: '32px',
            textTransform: 'none',
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: 'white',
            },
          }),
          ...(ownerState.size === 'large' && {
            width: '140px',
            height: '46px',
            textTransform: 'none',
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: 'white',
            },
          }),
          ...(ownerState.size === 'small' && {
            width: '92px',
            height: '32px',
            textTransform: 'none',
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: 'white',
            },
          }),
        }),
        textError: ({ ownerState }) => ({
          width: '80px',
          '&:hover': {
            backgroundColor: 'none',
          },
        }),
        textPrimary: ({ ownerState }) => ({
          ...(ownerState.size === 'medium' && {
            // width: '80px',
            height: '16px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'none',
            },
          }),
          ...(ownerState.size === 'small' && {
            width: '36px',
            height: '16px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'white',
            },
          }),
          ...(ownerState.size === 'large' && {
            height: '16px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'white',
            },
          }),
        }),
      },
    },
  },
  palette: {
    primary: {
      main: '#30A193',
      normal: '#1B877A',
      dark: '#4ABAAD',
      light: '#B2FFF6',
      semilight: '#77EDDF',
      contrastText: '#fff',
    },
    secondary: {
      main: '#0B6D62',
      light: '#94A196',
      dark: '#373C38',
      darker: '#656E66',
    },
    greyScale: {
      main: '#E9EBE9',
      light: '#F7F7F7',
      dark: '#D6D6D6',
      contrastText: '#373C38',
    },
    info: {
      main: '#B2FFF6',
      light: '#E8FFFC',
      dark: '#77EDDF',
      normal: '#E5E5E5',
      semilight: 'rgba(125, 125, 125, 0.12)',
    },
    warning: {
      main: '#ED8F02',
      dark: '#FF725E',
    },
    success: {
      main: '#EFFEFF',
      dark: '#E9FFF4',
    },
    error: {
      main: '#30A193',
    },
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1.875,
    },
    h3: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.875,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.375,
    },
    body2: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.375,
    },
    body3: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 3,
      fontFamily: 'Montserrat',
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1,
    },
    captionBold: {
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1,
      fontFamily: 'Montserrat',
    },
    fontFamily: [
      '"Montserrat"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
});

// for responsiveness
const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
