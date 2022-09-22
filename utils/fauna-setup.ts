import * as faunadb from "https://deno.land/x/fauna@5.0.0-deno-alpha9/mod.js";

const q = faunadb.query as any;

const faunaClient = new faunadb.Client({ 
  domain: Deno.env.get("FAUNA_DOMAIN"),
  secret: Deno.env.get("FAUNA_ADMIN_SECRET"),
});


// Create Post, Comment, User, collections
await faunaClient.query(
  q.CreateCollection({ name: 'Post' })
);
await faunaClient.query(
  q.CreateCollection({ name: 'Comment' })
);
await faunaClient.query(
  q.CreateCollection({ name: 'User' })
);

console.log('Created Post, Comment, User collections');


await faunaClient.query(
  q.CreateIndex({
    name: 'comments_by_post',
    source: q.Collection('Comment'),
    terms: [
      { field: ['data', 'postId'] },
    ]
  })
)

await faunaClient.query(
  q.CreateIndex({
    name: 'users_by_email',
    source: q.Collection('User'),
    terms: [
      { field: ['data', 'email'] },
    ]
  })
)

// Create a UnAuthenticated role
await faunaClient.query(
  q.CreateRole({
    name: "UnAuthRole",
    privileges: [
      {
        resource: q.Collection("User"),
        actions: {
          read: true,
          write: false,
          create: true,
          delete: false,
          history_read: false,
          history_write: false,
          unrestricted_read: false
        }
      },
      {
        resource: q.Collection("Post"),
        actions: {
          read: true,
          write: false,
          create: false,
          delete: false,
          history_read: false,
          history_write: false,
          unrestricted_read: false
        }
      },
      {
        resource: q.Collection("Comment"),
        actions: {
          read: true,
          write: false,
          create: false,
          delete: false,
          history_read: false,
          history_write: false,
          unrestricted_read: false
        }
      },
      {
        resource: q.FaunaIndex("users_by_email"),
        actions: {
          unrestricted_read: false,
          read: true
        }
      },
      {
        resource: q.FaunaIndex("comments_by_post"),
        actions: {
          unrestricted_read: false,
          read: true
        }
      }
    ]
  })
);

// setTimeout( async () => {
// }, 1000);



await faunaClient.query(
  q.CreateRole({
    name: "AuthRole",
    membership: [
      {
        resource: q.Collection("User")
      }
    ],
    privileges: [
      {
        resource: q.Collection("Post"),
        actions: {
          read: true,
          write: q.Query(
            q.Lambda(
              ["oldData", "newData"],
              q.And(
                q.Equals(q.Identity(), q.Select(["data", "owner"], q.Var("oldData"))),
                q.Equals(
                  q.Select(["data", "owner"], q.Var("oldData")),
                  q.Select(["data", "owner"], q.Var("newData"))
                )
              )
            )
          ),
          create: true,
          delete: q.Query(
            q.Lambda(
              "ref",
              q.Equals(q.Identity(), q.Select(["data", "owner"], q.Get(q.Var("ref"))))
            )
          ),
          history_read: false,
          history_write: false,
          unrestricted_read: false
        }
      },
      {
        resource: q.Collection("User"),
        actions: {
          read: true,
          write: false,
          create: false,
          delete: false,
          history_read: false,
          history_write: false,
          unrestricted_read: false
        }
      },
      {
        resource: q.Collection("Comment"),
        actions: {
          read: true,
          write: false,
          create: true,
          delete: q.Query(
            q.Lambda(
              "ref",
              q.Equals(q.Identity(), q.Select(["data", "owner"], q.Get(q.Var("ref"))))
            )
          ),
          history_read: false,
          history_write: false,
          unrestricted_read: false
        }
      }
    ]
  })
);

const secrect = await faunaClient.query(
  q.CreateKey({
    role: q.Role('UnAuthRole'),
    data: {
      name: 'For Unauthenticated Users',
    },
  })
);

console.log('Use the following key as FAUNA_SECRET in .env file: -->');

console.log(secrect.secret);