import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from  './styles/global'
import CartProvider from './contexts/CartContext'
import { ToastContainer } from 'react-toastify'

import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>
      <ToastContainer />
      <GlobalStyle />
    </ThemeProvider>
  )
}