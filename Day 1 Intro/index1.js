//by using Arrow funciton :-

var http = require("http");
http.createServer((req,res)=>{
  res.write("<h1>welcome to cybrom bhopal...!</h1>");
  res.write("<h2>welcome to cybrom bhopal...!</h2>");
  res.end()
}

).listen(9000);