import * as faunadb from "https://deno.land/x/fauna@5.0.0-deno-alpha9/mod.js";

export const q = faunadb.query as any;

export const faunaClient = new faunadb.Client({ 
  domain: Deno.env.get("FAUNA_DOMAIN"),
  secret: Deno.env.get("FAUNA_SECRET"),
});


export const getFaunaClient = (secret: string) => new faunadb.Client({
  domain: Deno.env.get("FAUNA_DOMAIN"),
  secret,
});