//using commanjs
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  const filePath = "./assignment_1/sample.txt";

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.end("Error: File not found!");
      } else {
        res.end("An error occurred while reading the file.");
      }
    } else {
      res.end(`file content :\n${data}`);
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
