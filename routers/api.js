"use strict";
var express = require('express');
var router = express.Router();
var carModels = require('../models/car-models.js');

//统一返回格式
var responseData = {};

//翻页;
router.post('/pages', function(req, res, next) {

    var pages = req.body.pages || 0; //页码;

    var limit = 8;  //取几条数据;
    var skip = limit * pages; //从第几条开始;
    var totalPages = 0;       //总页数;
    carModels.find({}).count({},function(err,count){
        if(err){
            console.log('出错了');
        }
        
        totalPages = Math.floor( count / limit );

    });
    
    carModels.find({}).limit(limit).skip(skip).then(function(data) {

        if( pages < totalPages ){
            responseData.code = 1;
            responseData.message = data;
                
            return res.json(responseData);
        }else{
            responseData.code = 2;
            return res.json(responseData);
        }
                
    });

});


module.exports = router;