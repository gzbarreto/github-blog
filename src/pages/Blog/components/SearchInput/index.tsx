import { useContext } from "react"
import { SearchInputContainer, SearchInputHeader } from "./styles"
import { PostsContext } from "../../../../contexts/PostsContext"

export function SearchInput() {
  const { posts } = useContext(PostsContext)

  return (
    <SearchInputContainer>
      <SearchInputHeader>
        <h3>Publicações</h3>
        <span>{posts.length} publicações</span>
      </SearchInputHeader>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchInputContainer>
  )
}
