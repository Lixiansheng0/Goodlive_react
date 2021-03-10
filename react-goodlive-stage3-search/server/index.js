const express = require("express");
const app = express();
const router = require("./router")
const debug = require("debug")("my-application");
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({
    extended:true
}))

app.use("/api",router);

app.listen(3200,() =>{
    debug("server run at port 3200");
})