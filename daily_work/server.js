 const express = require("express");
 //const bodyParser = require('body-parser');

 const server = express();

 //serve static files in our app
 server.use(express.static("/home/dci/Documents/fbw39/FbW39_Lessons/daily_work"));

 const port = 4100;
 server.listen(port, function () {
   console.log("server is running");
 });