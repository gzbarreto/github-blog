import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { PostsProvider } from "./contexts/PostsContext"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostsProvider>
          <Router />
        </PostsProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

//#TODO
// Criar lógica para pesquisar post pelo title usando o component de input
// Formatar a data dos posts