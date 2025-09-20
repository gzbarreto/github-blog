import { useContext } from "react"
import { SearchInputContainer, SearchInputHeader } from "./styles"
import { PostsContext } from "../../../../contexts/PostsContext"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const searchFormInputSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormInputSchema>

export function SearchInput() {
  const { posts } = useContext(PostsContext)
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormInputSchema),
  })

  function handleSearchPosts(data: SearchFormInput) {
    console.log("query:", data.query)
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <SearchInputHeader>
        <h3>Publicações</h3>
        <span>{posts.length} publicações</span>
      </SearchInputHeader>

      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchInputContainer>
  )
}
