import { Handlers } from "$fresh/server.ts";
import { faunaClient, q } from "../../utils/db.ts";

export const handler: Handlers = { 
  async POST(req: Request) {
    try {
      const body = await req.json();

      const newUser = await faunaClient.query(
        q.Create(
          q.Collection("User"),
          {
            credentials: { password: body.password },
            data: {
              email: body.email,
              username: body.username,
            },
          }
        )
      );

      return Response.json({
        data: {
          ...newUser.data,
        }
      });
    } catch (error) {
      return Response.json({
        error: error.message,
      });
    }
  }
};