let createError = require('http-errors');
let express = require('express');
let cors = require('cors');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//User imports

//Routes controllers
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let apiRoutes = require('./routes/api/api-routes').router;
let authRoutes = require('./routes/auth/auth-router').router;

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//app.use(logger('combined'));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());
//User use

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  return res.status(err.status || 500).json({
    status: 'error',
    message: err.message,
  });
  //res.render('error');
});

module.exports = app;
