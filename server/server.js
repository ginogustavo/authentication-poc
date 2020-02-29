//npm modules
const express = require('express');

//create the server
const app = express();
app.listen(3000, ()=> {
    console.log("Listen on localhost:3000");
});