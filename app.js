const express = require('express');
const app = express();
const port = 3000;

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const helpers = require('handlebars-helpers')();

const db = require('./models');
const User = db.User;
const Record = db.Record;

const HomeRouter = require('./routers/home');
const UserRouter = require('./routers/user');
const AuthRouter = require('./routers/auth');
const RecordRouter = require('./routers/record');
const FilterRouter = require('./routers/filter');

if (process.env.NODE_ENV !== 'production') { // 如果不是 production 模式
  require('dotenv').config() // 使用 dotenv 讀取 .env 檔案
}

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(methodOverride('_method'));

app.use(session({
  secret: 'soajdpjp',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
// 使用 connect-flash
app.use(flash());

require('./config/passport')(passport);
app.use((req, res, next) => {
  res.locals.user = req.user;
  // 辨識使用者是否已經登入的變數，讓 view 可以使用
  res.locals.isAuthenticated = req.isAuthenticated();
  // 新增兩個 flash message 變數 
  res.locals.success_msg = req.flash('success_msg');
  res.locals.warning_msg = req.flash('warning_msg');
  next()
})

app.use('/', HomeRouter);
app.use('/users', UserRouter);
app.use('/auth', AuthRouter);
app.use('/records', RecordRouter);
// app.use('/', FilterRouter);

app.listen(port, () => {
  db.sequelize.sync();
  // db.sequelize.sync({
  //   force: true
  // });
  console.log('Express is running.');
})