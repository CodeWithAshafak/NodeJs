//other method  i.e. traditional method:- 
let http = require("http");

const server = http.createServer(function(req,res){
  res.write("<h1> Hello cybrom !!!!</h1>");
  res.end("our server ends....");

})

server.listen(8080,()=>{
  console.log("server run on 8080");
  
});