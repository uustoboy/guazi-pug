"use strict";
var express = require('express');
var router = express.Router();

var carUser = require('../models/car-models');
var data;

//匹配 汽车详情
router.get('/:id', function(req, res, next) {

	var _id = req.params.id || ''; 

	//根据id查找数据;
	carUser.findOne({ _id : _id},function( err,contents ){

       if( err ){

       		next();

       }else{

       		res.render('./info',{
		    	carinfo : contents
			});

       }
        
	});

});

//主页面;
router.get('/', function(req, res, next) {
	
	var limit = 8;
	var skip = 0;
	
	carUser.find({}).limit(limit).skip(skip).then(function( contents ){
		res.render('./index',{
        	carlists : contents
		});
	});

});

// 404
router.get('*', function(req, res){
    res.render('./404')
});

module.exports = router;
