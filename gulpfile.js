'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('start', function () {
  nodemon({
    script: 'app.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

//执行的默认事件;
gulp.task('default',function(){
   gulp.run('start');      
});