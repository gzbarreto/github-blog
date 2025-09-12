import { UsersIcon } from "@phosphor-icons/react/dist/ssr"
import {
  ProfileContainer,
  ProfileContent,
  ProfileInfo,
  ProfileName,
} from "./styles"
import { BuildingOfficeIcon, GithubLogoIcon } from "@phosphor-icons/react"
import { LinkButton } from "../../../../components/LinkButton"
import { api } from "../../../../lib/axios"
import { useCallback, useEffect, useState } from "react"

interface User {
  link: string
  name: string
  bio: string
  nickname: string
  company: string
  followers: number
  avatar_url: string
}

export function Profile() {
  const [user, setUser] = useState<User>({} as User)

  const fetchUser = useCallback(async () => {
    const response = await api.get("/users/gzbarreto")
    console.log(response.data)

    setUser({
      link: response.data.html_url,
      name: response.data.name,
      bio: response.data.bio,
      nickname: response.data.login,
      company: response.data.company,
      followers: response.data.followers,
      avatar_url: response.data.avatar_url,
    })
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="Foto de perfil" />
      <ProfileContent>
        <ProfileName>
          <h1>{user.name}</h1>
          <LinkButton label="GITHUB" url={user.link} />
        </ProfileName>
        <span>{user.bio || ""}</span>
        <ProfileInfo>
          <span>
            <GithubLogoIcon size={18} weight="fill" />
            {user.nickname}
          </span>
          <span>
            <BuildingOfficeIcon size={18} weight="fill" />
            {user.company || "Independente"}
          </span>
          {user.followers > 0 && (
            <span>
              <UsersIcon size={18} weight="fill" />
              {user.followers}{" "}
              {user.followers === 1 ? "seguidor" : "seguidores"}
            </span>
          )}
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
