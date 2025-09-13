import { useNavigate } from "react-router-dom"
import { PostCard } from "./components/PostCard"
import { Profile } from "./components/Profile"
import { SearchInput } from "./components/SearchInput"
import { BlogContainer, PostListContainer } from "./styles"
import { useContext } from "react"
import { PostsContext } from "../../contexts/PostsContext"

export function Blog() {
  const { posts } = useContext(PostsContext)
  const navigate = useNavigate()

  return (
    <BlogContainer>

      <Profile />
      <SearchInput />
      <PostListContainer>
        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              created_at={post.created_at}
              onClick={() => navigate(`/post`)}
            />
          )
        })}
      </PostListContainer>
    </BlogContainer>
  )
}
