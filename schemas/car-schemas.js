"use strict";
var mongoose = require('mongoose');

//分类的表结构
module.exports = new mongoose.Schema({
    info:String,                  //车；
    money:String,                 //价钱;
    phone:String,                 //电话号码;
    time:String,                  //上牌时间;
    mileage:String,               //公里数;
    gearbox:String,               //变速箱;
    emission:String,              //排放标准;
    location:String,              //上牌地;
    imgs:Array                    //图片;
});