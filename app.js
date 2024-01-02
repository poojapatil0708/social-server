const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const api = require('./api');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", api);

mongoose.connect('mongodb://127.0.0.1:27017/socialmedia')
  .then(() => console.log('Connected!'));

app.listen(8000, ()=> console.log("Server is listning on port 8000"))