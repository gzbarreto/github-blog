import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./assets/styles/themes/default"
import { GlobalStyle } from "./assets/styles/global"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}
