import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import {  ThemeProvider} from '@emotion/react';
import { MemoryRouter } from "react-router-dom";
import theme from "../src/theme/index";
import "./storybook.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <MUIThemeProvider theme={theme}>
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </MemoryRouter>
    </MUIThemeProvider>
  ),
];