import { UsersIcon } from "@phosphor-icons/react/dist/ssr"
import { ProfileContainer, ProfileContent, ProfileInfo, ProfileName } from "./styles"
import { BuildingOfficeIcon, GithubLogoIcon } from "@phosphor-icons/react"
import { LinkButton } from "../LinkButton"

export function Profile() {
  return (
    <ProfileContainer>
      <img
        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        alt="Foto de perfil"
      />
      <ProfileContent>
        <ProfileName>
          <h1>Gabriela Barreto</h1>
          <LinkButton label="GITHUB" url="https://github.com/gzbarreto" />
        </ProfileName>
        <span>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </span>
        <ProfileInfo>
          <span>
            <GithubLogoIcon size={18} weight="fill" />
            gabrielabarreto
          </span>
          <span>
            <BuildingOfficeIcon size={18} weight="fill" />
            Rocketseat
          </span>
          <span>
            <UsersIcon size={18} weight="fill" />
            32
          </span>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
