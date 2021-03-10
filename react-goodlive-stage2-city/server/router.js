const express = require("express");
const router = express.Router();
const homehotData = require("./data/home/homehot")
const homehotData2 = require("./data/home/homehot2")
const url = require("url");

// 接受参数
router.get("/homehot1",(req,res) =>{
    const city = url.parse(req.url,true).query.city;
    if(city === '北京'){
        res.send(homehotData2.hot1)
    }else{
        res.send(homehotData.hot1)
    }
})

router.get("/homehot2",(req,res) =>{
    const city = url.parse(req.url,true).query.city;
    if(city === '北京'){
        res.send(homehotData2.hot2)
    }else{
        res.send(homehotData.hot2)
    }
})


module.exports = router;