// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/api/joke.ts";
import * as $3 from "./routes/api/login.ts";
import * as $4 from "./routes/api/post.ts";
import * as $5 from "./routes/api/register.ts";
import * as $6 from "./routes/index.tsx";
import * as $7 from "./routes/login.tsx";
import * as $8 from "./routes/posts/[id]/edit.tsx";
import * as $9 from "./routes/posts/[id]/index.tsx";
import * as $10 from "./routes/posts/new.tsx";
import * as $11 from "./routes/signup.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/LoginForm.tsx";
import * as $$2 from "./islands/PostForm.tsx";
import * as $$3 from "./islands/PostList.tsx";
import * as $$4 from "./islands/SignupForm.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/api/joke.ts": $2,
    "./routes/api/login.ts": $3,
    "./routes/api/post.ts": $4,
    "./routes/api/register.ts": $5,
    "./routes/index.tsx": $6,
    "./routes/login.tsx": $7,
    "./routes/posts/[id]/edit.tsx": $8,
    "./routes/posts/[id]/index.tsx": $9,
    "./routes/posts/new.tsx": $10,
    "./routes/signup.tsx": $11,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/LoginForm.tsx": $$1,
    "./islands/PostForm.tsx": $$2,
    "./islands/PostList.tsx": $$3,
    "./islands/SignupForm.tsx": $$4,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
