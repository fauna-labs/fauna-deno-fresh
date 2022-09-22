// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/api/joke.ts";
import * as $3 from "./routes/api/post.ts";
import * as $4 from "./routes/api/register.ts";
import * as $5 from "./routes/index.tsx";
import * as $6 from "./routes/login.tsx";
import * as $7 from "./routes/posts/[id]/edit.tsx";
import * as $8 from "./routes/posts/[id]/index.tsx";
import * as $9 from "./routes/posts/new.tsx";
import * as $10 from "./routes/signup.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/PostForm.tsx";
import * as $$2 from "./islands/SignupForm.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/api/joke.ts": $2,
    "./routes/api/post.ts": $3,
    "./routes/api/register.ts": $4,
    "./routes/index.tsx": $5,
    "./routes/login.tsx": $6,
    "./routes/posts/[id]/edit.tsx": $7,
    "./routes/posts/[id]/index.tsx": $8,
    "./routes/posts/new.tsx": $9,
    "./routes/signup.tsx": $10,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/PostForm.tsx": $$1,
    "./islands/SignupForm.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;