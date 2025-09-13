import { useContext } from "react"
import {
  PostContainer,
  PostFooter,
  PostHeaderButtons,
  PostHeaderContainer,
} from "./styles"
import { PostsContext } from "../../contexts/PostsContext"
import { useParams } from "react-router-dom"
import {
  CalendarDotsIcon,
  CaretLeftIcon,
  ChatCircleIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react"
import { LinkButton } from "../../components/LinkButton"

export function Post() {
  const params = useParams()
  const { posts } = useContext(PostsContext)

  const post = posts.find((post) => post.id === Number(params.id))

  if (!post) {
    //condicional para garantir que o post nao seja undefined
    return (
      <PostHeaderContainer>
        <h2>Post não encontrado.</h2>
      </PostHeaderContainer>
    )
  } else {
    return (
      <div>
        <PostHeaderContainer>
          <PostHeaderButtons>
            <button onClick={() => window.history.back()}>
              <CaretLeftIcon size={12} />
              VOLTAR
            </button>
            <LinkButton label="VER NO GITHUB" url={post.html_url} />
          </PostHeaderButtons>

          <h2>{post.title}</h2>

          <PostFooter>
            <span>
              <GithubLogoIcon size={18} weight="fill" />
              {post.user_name}
            </span>
            <span>
              <CalendarDotsIcon size={18} weight="fill" />
              {post.created_at}
            </span>
            <span>
              <ChatCircleIcon size={18} weight="fill" />
              {post.comments} comentários
            </span>
          </PostFooter>
        </PostHeaderContainer>

        <PostContainer>
          <p>{post.body}</p>
        </PostContainer>
      </div>
    )
  }
}
