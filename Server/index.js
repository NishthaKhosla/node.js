const http =  require("http");
const fs =  require("fs");
//inbuilt functionn to create a server\
//req contains data of request
//res is used to send a response
const myServer = http.createServer((req,res) =>{
    const log = `${Date.now()}:${req.url}New Req Received\n`;
    fs.appendFile("log.txt",log,(err,data) =>{
        switch(req.url){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                res.end("Hy! My name is nishtha");
                break;
            default:
                res.end("err:404 NOT FOUND!");    


        }
    })
    
    
});

//we need a port to start a server.Only one server can run on one port
myServer.listen(8001,() => console.log("server started!"));