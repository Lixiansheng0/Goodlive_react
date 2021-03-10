const express = require("express");
const router = express.Router();
const homehotData = require("./data/home/homehot")
const homehotData2 = require("./data/home/homehot2")
const url = require("url");
const searchData = require("./data/search")
const detailData = require("./data/detail")
const commentData = require("./data/comment")
const orderData = require("./data/order")

// 接受参数
router.get("/homehot1", (req, res) => {
    const city = url.parse(req.url, true).query.city;
    if (city === '北京') {
        res.send(homehotData2.hot1)
    } else {
        res.send(homehotData.hot1)
    }
})

router.get("/homehot2", (req, res) => {
    const city = url.parse(req.url, true).query.city;
    if (city === '北京') {
        res.send(homehotData2.hot2)
    } else {
        res.send(homehotData.hot2)
    }
})

/**
 * 搜索接口
 */
router.get("/search", (req, res) => {
    // 内容 城市 页码
    const { keywords, city, page } = url.parse(req.url, true).query;
    console.log("keywords=" + keywords, "city=" + city, "page=" + page);
    res.send(searchData);
})

/**
 * 详情接口
 */
router.get("/detail", (req, res) => {
    const { id } = url.parse(req.url, true).query;
    console.log("商品id:" + id);
    res.send(detailData);
})

/**
 * 评论
 */
router.get("/comment", (req, res) => {
    const { id } = url.parse(req.url, true).query;
    console.log("商品id:" + id);
    res.send(commentData)
})

/**
 * 订单
 */
router.get("/order", (req, res) => {
    const { username } = url.parse(req.url, true).query;
    console.log("用户:" + username);
    res.send(orderData)
})

router.post("/getcomment",(req,res) =>{
    const content = req.body.content;
    console.log(content);
    res.send({
        msg:true
    })
})

module.exports = router;