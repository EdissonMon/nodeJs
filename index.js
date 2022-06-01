const http = require("http");

http.createServer(function (req, res) {
    res.writeHead(404, {"content-type": "text/plain"})
    res.write("Esto es un simple texto");
    res.end();
}).listen(3000);

