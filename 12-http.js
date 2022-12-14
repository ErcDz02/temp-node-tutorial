const http = require("http");

// req: Information that I am recieving
// res: Information that I am sending
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`<h1>Oops</h1>`);
});

server.listen(5000);
