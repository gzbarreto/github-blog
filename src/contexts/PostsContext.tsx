import { createContext, useCallback, useEffect, useState } from "react"
import { api } from "../lib/axios"

interface Post {
  id: number
  title: string
  body: string
  comments: number
  created_at: string
  user_name: string
  html_url: string
}

interface PostProviderProps {
  children: React.ReactNode
}

interface PostContextType {
  posts: Post[]
  fetchPosts: (query?: string) => Promise<void>
}

export const PostsContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = useCallback(async (query?: string) => {
    const q = query
      ? `repo:gzbarreto/github-blog ${query}`
      : "repo:gzbarreto/github-blog"

    const response = await api.get("/search/issues", {
      params: { q },
    })
    console.log("fetching:", response.data)
    console.log("url params:", q)

    setPosts(
      response.data.items.map((post: any) => ({
        id: post.number,
        title: post.title,
        body: post.body,
        comments: post.comments,
        created_at: post.created_at,
        user_name: post.user.login,
        html_url: post.html_url,
      }))
    )
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
