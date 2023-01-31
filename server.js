const http = require('http');

const hostname = '127.0.0.1';
const port = 4002;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    if(req.url === "/register"){
        res.end(JSON.stringify({
            data: "register",
        }));
    }
    else{
        res.end(JSON.stringify({
            data: "Hello World!",
        }));
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});