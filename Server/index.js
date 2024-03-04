const http =  require("http");
const fs =  require("fs");
//inbuilt functionn to create a server\
//req contains data of request
//res is used to send a response
const myServer = http.createServer((req,res) =>{
    const log = `${Date.now()}:New Req Received\n`;
    fs.appendFile("log.txt",log,(err,data) =>{
        res.end("Hello from server again");
    })
    
    
});

//we need a port to start a server.Only one server can run on one port
myServer.listen(8001,() => console.log("server started!"));