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
  fetchPosts: () => Promise<void>
}

export const PostsContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = useCallback(async () => {
    const response = await api.get(
      "/search/issues?q=repo:gzbarreto/github-blog"
    )
    console.log("fetching:", response.data)

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
