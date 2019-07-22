const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser=require('body-parser');


const indexRouter = require('./routes/index');


//models rouoter
const modelsIndexRouter=require('./routes/models');
const createByModelsRouter=require('./routes/mymodel/create_by_model')

//admin router
const adminIndexRouter=require('./routes/admin/index');
const addAdminRouter=require('./routes/admin/add');
const saveAdminRouter=require('./routes/admin/save');
const viewAdminRouter=require('./routes/admin/view_svg');
const removeAdminRouter=require('./routes/admin/remove');
const editAdminRouter=require('./routes/admin/edit');
const updateAdminRouter=require('./routes/admin/update');


const app = express();

const expressLayouts = require('express-ejs-layouts');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);


app.use(logger('dev'));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//models list
app.use('/models',modelsIndexRouter);
app.use('/create_by_model',createByModelsRouter);

//admin crud
app.use('/admin',adminIndexRouter);
app.use('/add_admin',addAdminRouter);
app.use('/save_admin',saveAdminRouter);
app.use('/view_svg',viewAdminRouter);
app.use('/remove_admin',removeAdminRouter);
app.use('/edit_admin',editAdminRouter);
app.use('/update_admin',updateAdminRouter);


//teste router



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

module.exports = app;
