"use strict";

var express = require('express');  //引入express;
var mongoose = require('mongoose');  //引入mongoose;
var app = express();

//加载body-parser，用来处理post提交过来的数据
var bodyParser = require('body-parser');

//bodyparser设置
app.use( bodyParser.urlencoded({extended: true}) );

//设置静态文件托管
app.use( '/public', express.static( __dirname + '/public') );

//设置模板文件存放的目录，第一个参数必须是views，第二个参数是目录
app.set('views', './views');

//设置模板引擎
app.set('view engine', 'pug');

//加载路由;
app.use('/', require('./routers/api'));
app.use('/', require('./routers/car-routers'));

//监听http请求
mongoose.connect('mongodb://localhost/car', function(err) {
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
        app.listen(3000);
    }
});