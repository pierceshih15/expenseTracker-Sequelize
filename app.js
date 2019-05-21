const express = require('express');
const app = express();
const port = 3000;

const exphbs = require('express-handlebars');

const UserRouter = require('./routers/user');

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
  res.send('首頁');
})

app.use('/users', UserRouter);

app.listen(port, () => {
  console.log('Express is running.');
})