import {
  CalendarDotsIcon,
  CaretLeftIcon,
  ChatCircleIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react"
import { PostFooter, PostHeaderButtons, PostHeaderContainer } from "./styles"
import { LinkButton } from "../../../../components/LinkButton"

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <PostHeaderButtons>
        <button onClick={() => window.history.back()}>
          <CaretLeftIcon size={12} />
          VOLTAR
        </button>
        <LinkButton label="VER NO GITHUB" url="#" />
      </PostHeaderButtons>

      <h2>JavaScript data types and data structures</h2>

      <PostFooter>
        <span>
          <GithubLogoIcon size={18} weight="fill" />
          gzbarreto
        </span>
        <span>
          <CalendarDotsIcon size={18} weight="fill" />
          Há 1 dia
        </span>
        <span>
          <ChatCircleIcon size={18} weight="fill" />5 comentários
        </span>
      </PostFooter>
    </PostHeaderContainer>
  )
}
