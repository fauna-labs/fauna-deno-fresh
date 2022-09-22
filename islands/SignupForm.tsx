import { useState } from "preact/hooks";
import { inputStyle } from "./PostForm.tsx";

export default function SignupForm() { 
  const [state, setState] = useState({});

  const handleChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const register = async () => { 
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          ...state,
        }),
      });
      const data = await response.json();
      console.log(data);
      alert("Successfully registered!, try to log 🪵 in now");

    } catch (error) {
      alert("Something went wrong!");
    }
  }

  return (
    <div>
      <div class="pl-4 pt-4 mt-4">
        <input 
          onChange={handleChange} 
          type="text" 
          class={`${inputStyle}`} 
          placeholder="Name" 
          name="username"
        />
      </div>
      <div class="pl-4 pt-4 mt-1">
        <input 
          onChange={handleChange} 
          type="email" 
          class={`${inputStyle}`} 
          placeholder="Email" 
          name="email"
        />
      </div>
      <div class="pl-4 pt-2 mt-1">
        <input 
          onChange={handleChange} 
          type="password" 
          class={`${inputStyle}`} 
          placeholder="Password" 
          name="password"
        />
      </div>
      <div class="pl-4 pt-2 mt-1">
        <button 
          onClick={register} 
          class="rounded-md mt-3 border-transparent bg-purple-200 px-4 py-2"
        >
          Registe
        </button>
      </div>
    </div>
  )
}