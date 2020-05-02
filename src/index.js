import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import store from './store'

import App from './App'

import theme from './__theme__/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    height: 100%
  }

  a , h1, h2, h3, h4, h5, h6 {
    color: #FFF;
  }

  a:hover {
    color: #FFF;
    font-weight: bold;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }
`

ReactDOM.render(
  <Provider store={store}>
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<App />
	</ThemeProvider>
  </Provider>,
	document.getElementById('root')
)
