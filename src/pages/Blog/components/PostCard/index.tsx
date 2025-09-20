import Markdown from "react-markdown"
import { PostCardContainer, PostContentContainer } from "./styles"
import { dateFormatter } from "../../../../utils/formatter"

interface PostCardProps {
  onClick: () => void
  title: string
  created_at: string
  body: string
}

export function PostCard({ onClick, title, created_at, body }: PostCardProps) {
  return (
    <PostCardContainer onClick={onClick}>
      <h2>{title}</h2>
      <span>{dateFormatter.format(new Date(created_at))}</span>
      <PostContentContainer>
        <Markdown>{body}</Markdown>
      </PostContentContainer>
    </PostCardContainer>
  )
}
