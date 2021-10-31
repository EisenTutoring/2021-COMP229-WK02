// Requires HTTP Module for every server
import http from 'http';

const hostname = "127.0.0.1";
const port = 3000;



let myVariable = server.httpLock;
console.log(myVariable);


// Changes does not apply until server restart
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
  //res.end("Good Bye World");
});

server.listen(port, hostname, () => {
  // Logs on node js
  console.log(`Server running at http://${hostname}:${port}/`);
});
