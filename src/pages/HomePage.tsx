import { useEffect, useState } from "react"
import { api } from "../api"

export function HomePage(){
  const [posts, setPosts] = useState([])
  const [totalPosts, setTotalPosts] = useState([])
  useEffect(() => {
    api.get('/posts')
      .then(response => {
        setPosts(response.data.posts)
        setTotalPosts(response.data.totalPosts)
        console.log({posts, totalPosts})
      })
  },[])

  return(
    <div className="max-w-7xl h-screen mx-auto my-0 grid grid-cols-wrapper gap-32">
      <div className="flex flex-col items-center">
        {posts.map((post: any) => {
          return(
            <div 
              key={post.id}
              className="rounded-md border-2 w-4/6 my-2">
              <div className="text-right pr-4">
                <a className="bg-blue-500 p-1 m-0">{post.category.name}</a>
              </div>
              <div className="ml-[40%]">
                <p className="text-xl text-c">{post.title}</p>
              </div>
              <p>{post.content}</p>
            </div>
          )
        })}
      </div>

      <div className="bg-slate-600">
        <h1>Hello World</h1>
      </div>
    </div>
  )
}