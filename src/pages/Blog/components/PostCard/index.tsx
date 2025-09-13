import { PostCardContainer } from "./styles";

interface PostCardProps {
  onClick: () => void;
  title: string;
  created_at: string;
  body: string;
}

export function PostCard({ onClick, title, created_at, body }: PostCardProps) {
  return (
    <PostCardContainer onClick={onClick}>
      <h2>{title}</h2>
      <span>{created_at}</span>
      <p>{body}</p>
    </PostCardContainer>
  )
}
