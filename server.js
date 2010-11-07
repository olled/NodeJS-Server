var createServer = require("http").createServer;
var readFile = require("fs").readFile;
var sys = require("sys");
var url = require("url");

var server = createServer(function (req, res) {
  if (req.method === "GET" || req.method === "HEAD") {
    
    res.simpleJSON = function (code, obj) {
      var body = JSON.stringify(obj);
      res.writeHead(code, { "Content-Type": "text/json"
                          , "Content-Length": body.length
                          });
      res.end(body);
    };

    handler(req, res);
  }
});