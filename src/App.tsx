import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./assets/styles/themes/default"
import { GlobalStyle } from "./assets/styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
