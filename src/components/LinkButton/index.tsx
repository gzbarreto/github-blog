import { ArrowSquareOutIcon } from "@phosphor-icons/react"
import { LinkButtonContainer } from "./styles"

interface LinkButtonProps {
  label: string
  url: string
}

export function LinkButton({ label, url }: LinkButtonProps) {
  return (
    <LinkButtonContainer href={url} target="_blank">
      <span>{label}</span>
      <ArrowSquareOutIcon size={14} weight="fill" />
    </LinkButtonContainer>
  )
}
