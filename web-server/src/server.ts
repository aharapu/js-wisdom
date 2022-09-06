import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();

const WEB_APP_SRC = Deno.env.get("WEB_APP_SRC");
const PORT = parseInt(Deno.env.get("PORT") || "3001");

app.use(async (context, next) => {
  try {
    await context.send({
      root: `${Deno.cwd()}${WEB_APP_SRC}`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});

console.log("Listening at port PORT", PORT);
await app.listen({ port: PORT });
