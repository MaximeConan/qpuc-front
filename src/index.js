import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import App from './App'

import theme from './__theme__/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    height: 100%
  }
`

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>,
  document.getElementById('root')
)
