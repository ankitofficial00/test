const http = require("http");

const hostName = "127.0.0.1";

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("welcome to our web server");
  } else if (req.url === "/iced-tea") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("we loved the iced tea !!");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-type", "text/plain");
    res.end("404 not found");
  }
});

server.listen(port, hostName, () => {
  console.log(`Server is listening on http://${hostName}:${port}`);
});
