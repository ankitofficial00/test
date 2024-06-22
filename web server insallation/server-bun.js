import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("welcome the web server with bun", { status: 200 });
    } else if (url.pathname === "/ice-tea") {
      return new Response("welcome to our loved one iced tea", { status: 200 });
    } else {
      return new Response("404 not found", { status: 404 });
    }
  },
  port: 4000,
  hostName: "127.0.0.1",
});
