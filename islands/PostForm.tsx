import { useState } from "preact/hooks";
export const inputStyle = `p-4 border-2 border-purple-400 radius rounded-md flex w-9/12`;

export default function PostForm() {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createPost = async (e: Event) => {
    e.preventDefault();
    const response = await fetch("/api/post", {
      headers: {
        "Authorization": localStorage.getItem("token") || "",
      },
      method: "POST",
      body: JSON.stringify({ title, content, author: localStorage.getItem("username") }),
    });
    const data = await response.json();
    if(data.error) {
      alert('⛔ Something went wrong! Are you logged in?');
      return;
    }
    alert('Post created!');
    setTitle("");
    setContent("");
  }

  return (
    <div class="p-5 m-5">
      <h1 class="text-xl">Post Form</h1>
      <div class="mt-1 flex">
        <input 
          class={`${inputStyle}`} 
          placeholder="Post Title"
          onChange={(e: any) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div class="mt-1 flex">
        <textarea 
          class={`${inputStyle}`} 
          placeholder="Write something..."
          onChange={(e: any) => setContent(e.target.value)}
          value={content}
        />
      </div>
      <button 
            onClick={createPost}
            class="rounded-md mt-3 border-transparent bg-purple-200 px-4 py-2"
          >
            Submit
          </button>
    </div>
  );
}