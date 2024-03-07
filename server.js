const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const app = express()

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
const path = require("path")
const cors = require("cors")
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(morgan("dev"))



const dbSampleUserToVerify = "Rasul"
const dbSamplePasswordToVerify = "Rasul@123"


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.engine('html', require("ejs").renderFile);
app.set('view engine','html');
app.set('views',__dirname);
// expressApp.use(expressApp.oauth.errorHandler())
app.use(require('express').static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get("/landing", function(req, res){
    res.sendFile(path.join(__dirname,'landing.html'))
})

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname,'login.html'))
})


app.post("/login", function(req, res){
    const {username, password} = req.body
    console.log(req.body)
    console.log("username Received---", username)
    console.log("password Received---", password)
    if(username == dbSampleUserToVerify && password == dbSamplePasswordToVerify) {
        // Post Login Response
        res.status(200).send({status: 200, message:"Login Successfull", error: null})
    } else {
        res.status(401).send({status: 403, message:"Invalid Credentials", error: "Invalid Credentials"})

    }
})


app.listen(8080, () => {
  console.log('Server is running on port 8080')
})