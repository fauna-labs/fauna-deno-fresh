import { useState } from "preact/hooks";
import { Handlers, PageProps } from "$fresh/server.ts";
import { faunaClient, q } from "../../../utils/db.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { id } = ctx.params;
    try {
      const post = await faunaClient.query(
        q.Get(q.Ref(q.Collection('Post'), id))
      );
      return ctx.render({
        _id: post.ref.id,
        ...post.data,
      });
    } catch (error) {
      return Response.json({
        error: error.message,
      });
    }
  },
};

export default function PostPage(props: PageProps) {
  const [post, setPost] = useState<any>();
  setPost(props.data);

  const deletePost = async () => {
    const response = await fetch(`/api/post/`, {
      headers: {
        "Authorization": `${localStorage.getItem("token")}`,
      },
      method: "DELETE",
      body: JSON.stringify({
        _id: post._id
      })
    });
    const data = await response.json();
    if(data.error) {
      alert(data.error);
    } else {
      alert("Post deleted!");
      window.location.href = "/";
    }
  }

  if(!post) { 
    return <div>Loading...</div>
  }
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <h1 class="text-xl pl-4">{post.title}</h1>
      <div class="text-sm font-bold pl-4">By {post.author}</div>
      <p class="pl-4 text-left">{post.content}</p>
      <button class="border mt-1 p-2 cursor:pointer" onClick={deletePost}>Delete</button>
    </div>
  )
}