
const express = require('express');
const app = express();

 app.use(function(res, req, next)
{
  requestCount = requestCount + 1;
  next();
})

app.get('/user',function(res,req){
  res.statusCode(200).json({ name:'john'});
});

app.post('/user',function(res,req){
  res.statusCode(200).json({ msg: 'created dummy user'});
});
const PORT =3000;
app.listen(PORT ,() =>{
  console.log('server is running on port $ {PORT}');
});
module.exports = app;