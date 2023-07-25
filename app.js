var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var { MySQL } = require("./src/database/db_helper");
require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// require("./src/router")(app);
require("./src/core/posts/routes.js")(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.get('/', function(req,res,next){
//   res.render('Hello OJT');
// })


const port = process.env.PORT;
app.listen(port, function(){
  console.log("Application is running on port : ", port);
  MySQL.getConnection((err, result) => {
    if(err){
      console.log(err);
    }else{
      console.log(result.state);
    }
  });
});
