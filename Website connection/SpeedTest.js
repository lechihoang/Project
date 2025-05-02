const http = require('http');

function PingWebsite(url) {
    const hostname = url.replace(/^https?:\/\//, "");
    console.log(`Testing connection to ${hostname}`);
    const start = Date.now();
    const req = http.get(`http:///${hostname}`, res => {
        const end = Date.now();
        const reponse = end - start;
        console.log(`Connected to ${hostname}`);
        console.log(`Reponse status: ${res.statusCode}`);
        console.log(`Reponse time: ${reponse}ms`);
        res.resume();
    });
    req.on("error", (err) => {
        const end = Date.now();
        const reponse = end - start;
        console.log(`Failed to connect ${hostname}: ${err.message}`);
        console.log(`Time elapsed when failed: ${reponse}`);
    });
    req.setTimeout(3000, () =>{
        req.abort();
        const end = Date.now();
        const reponse = end - start;
        console.log(`Connection to ${hostname} time out`);
        console.log(`Time elapsed before timeout: ${reponse}`);
    });
}

if (process.argv.length < 3) {
    console.log("Usage:node speedTest.js website1 website2...");
    console.log("Example:node speedTest.js google.com github.com...");
  } else {
    const websites = process.argv.slice(2);
    websites.forEach((site) => {
      PingWebsite(site);
    });
  }