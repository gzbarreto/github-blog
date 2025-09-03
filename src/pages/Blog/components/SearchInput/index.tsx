import { SearchInputContainer, SearchInputHeader } from "./styles"

export function SearchInput() {
  return (
    <SearchInputContainer>
      <SearchInputHeader>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </SearchInputHeader>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchInputContainer>
  )
}
