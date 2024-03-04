const fs = require("fs");

//Writing a file

//syncronous-Blocking req
fs.writeFileSync("./text.tst","hey there i am testing");
//Async-Non-blocking request
fs.writeFileSync("./text.tst1","hey there i am testing",(err)=>{});

//Reading a file

//sync-it returns the data read
const result = fs.readFileSync("./contacts.txt","UTF-8");
console.log(result);

//Async-it doesnot returns directly but asks for callback instead
fs.readFile("./contacts.txt","utf-8",(err,result) =>{
    if(err){
        console.log("error occured",err);
    }
    else{
        console.log(result);
    }
});

//to add data to existing file without overriding
fs.appendFileSync("./text.tst", '\nHey there');
//copying a file
fs.cpSync("./text.tst","text1.tst");
//deleting a file
fs.unlinkSync("./text.tst1");
//getting statistics of a file
console.log(fs.statSync("./text.tst"));