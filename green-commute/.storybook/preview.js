import { ThemeProvider } from "@mui/material"
import { addDecorator } from "@storybook/react"
import responsiveTheme from '../src/theme/index'
import { addons } from "@storybook/addons"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    responsiveTheme,
  }
}

addDecorator(story => (<ThemeProvider theme={responsiveTheme}>
  {story()}
  </ThemeProvider>
))

addons.setConfig({
  responsiveTheme,
})
