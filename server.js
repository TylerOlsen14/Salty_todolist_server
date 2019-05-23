const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()

const todo = require('./routes/api/todo')

app.use(cors())
// BodyParser middleware
app.use(bodyParser.json())

// DB config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected ... '))
  .catch(err => console.log(err));

app.use('/', todo)
  .listen(process.env.PORT || 5000, () => console.log("It's clobberin' time!"))