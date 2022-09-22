import { useState, useEffect } from "preact/hooks";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/post");
        const remotePosts = await response.json();
        setPosts(remotePosts.data);
      } catch (error) {
        console.error(error);
        alert("Something went wrong!");
      }
    }
    fetchPosts();
  },[]);

  console.log(posts);

  return (
    <div class="p-5">
      <h1 class="text-xl">Post List</h1>
      {
        posts.map((post: any) => (
          <PostItem post={post} id={post._id} />
        ))  
      }
    </div>
  )
}


function PostItem({ post, id } : { post: any, id: string }) {
  return (
    <div class="p-5">
      <h4 class="text-md mb-3">{post.title}</h4>
      <a class="border mt-1 p-2 cursor:pointer" href={`/posts/${id}`}>View</a>
    </div>
  )
}