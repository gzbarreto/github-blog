import { PostCard } from "./components/PostCard"
import { Profile } from "./components/Profile"
import { SearchInput } from "./components/SearchInput"
import { BlogContainer, PostListContainer } from "./styles"

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchInput />
      <PostListContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostListContainer>
    </BlogContainer>
  )
}
