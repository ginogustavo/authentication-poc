//npm modules
const express = require('express');
const uuid = require('uuid/v4');

//create the server
const app = express();

//creates a home page route at '/'
app.get('/', (req,res)=>{
    console.log(req);
    const uniqueId = uuid();
    //string interpolation, requires ‘back-ticks’ instead of quote marks.
    //These (``) and not these (‘’)
    res.send(`Home Page. Unique id: ${uniqueId}\n`);
});

//tell the server what port to listen on
app.listen(3000, ()=> {
    console.log("Listen on localhost:3000");
});