const os = require('os');

// operation system
console.log(os.platform());

// architecture
console.log(os.arch());

// cpu cores info
console.log(os.cpus());

// free memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// home dir
console.log(os.homedir());

// uptime
console.log(os.uptime());

// os user name
console.log(os.userInfo().username);
