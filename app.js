const express = require('express');
const app = express();

const path = require('path');
const routes = require('./routes');

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Hook up all routes
app.use('/', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});