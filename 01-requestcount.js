
const express = require('express');
const { request } = require('./02-ratelimitter');
const app = express();
let requestCount =0;

 app.use(function(req, res, next)
{
  requestCount = requestCount + 1;
  next();
});

app.get('/user',function(req,res){
  res.statusCode(200).json({ name:'john'});
});

app.post('/user',function(req,res){
  res.statusCode(200).json({ msg: 'created dummy user'});
});
module.exports = app;