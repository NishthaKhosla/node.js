const os = require("node:os");

//shows the architecture
console.log(os.arch());
//shows the available memory
console.log(os.freemem()/(1024*1024*1024));
//shows the total memory
console.log(os.totalmem()/(1024*1024*1024));
//returns the host name
console.log(os.hostname());
//release name
console.log(os.release());
//shows location of temp file
console.log(os.tmpdir());
//shows the time from which sysytem is on in milliseconds
console.log(os.uptime());
//shows user info
console.log(os.userInfo());
//shows version
console.log(os.version());
//constants is not a function.It returns signals,priority and error together
console.log(os.constants);
//returns array containing information about thr computer cpu
console.log(os.cpus());
//returns path
