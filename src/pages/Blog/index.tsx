import { useNavigate } from "react-router-dom"
import { PostCard } from "./components/PostCard"
import { Profile } from "./components/Profile"
import { SearchInput } from "./components/SearchInput"
import { BlogContainer, PostListContainer } from "./styles"

export function Blog() {
  const navigate = useNavigate()

  return (
    <BlogContainer>
      <Profile />
      <SearchInput />
      <PostListContainer>
        <PostCard onClick={() => navigate("/post")} />
        <PostCard onClick={() => navigate("/post")} />
        <PostCard onClick={() => navigate("/post")} />
        <PostCard onClick={() => navigate("/post")} />
      </PostListContainer>
    </BlogContainer>
  )
}
