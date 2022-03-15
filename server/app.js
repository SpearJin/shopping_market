const express = require('express');
const app = express();
const cors = require('cors');
const { connect: dbConnect } = require('./models');
const router = require('./router');

app.use(express.static('build'));

app.use(cors());
dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(3000, () => {
  console.log('server success!!!');
});
