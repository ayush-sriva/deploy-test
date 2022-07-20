module.exports = {
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    
  ],
  "framework": "@storybook/react",
  "stories": [
    "../src/**/**/*.stories.mdx",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  



  
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}