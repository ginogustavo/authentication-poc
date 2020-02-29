//npm modules
const express = require('express');
const uuid = require('uuid/v4');
const session = require('express-session');


//create the server
const app = express();

//add and configure middleware
app.use(session({
    genid: (req) => {
        console.log('Inside the middleware');
        console.log(req.sessionID);
        return uuid(); // use uuid for session id
    },
    secret:'keyboard cat', //TODO: Change for production.
    resave:false,
    saveUninitialized: true
}));

//creates a home page route at '/'
app.get('/', (req,res)=>{
    console.log('Inside Home page call back function');
    console.log(req.sessionID);
    res.send("You hit the home page!");

});

//tell the server what port to listen on
app.listen(3000, ()=> {
    console.log("Listen on localhost:3000");
});