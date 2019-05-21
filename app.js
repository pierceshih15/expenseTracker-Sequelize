const express = require('express');
const app = express();
const port = 3000;

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const db = require('./models');
const User = db.User;
const Record = db.Record;

const HomeRouter = require('./routers/home');
const UserRouter = require('./routers/user');

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/', HomeRouter);
app.use('/users', UserRouter);

app.listen(port, () => {
  // 同步資料庫
  db.sequelize.sync()
  console.log('Express is running.');
})