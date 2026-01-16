const request = require('supertest');
const assert = require('assert');

const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
//@@ -11,11 +10,29 @@ const app = express();
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second


let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.use((req,res,next)=>{
  // numberOfRequestsForUser[req.headers["user-id"]]++;
  const userId = req.headers["user-id"];
  if(numberOfRequestsForUser[userId]){
    numberOfRequestsForUser[userId]++;
    if(numberOfRequestsForUser[userId] > 5){
      res.status(404).send("no entry");
    }
    else{
      next();
          }
  }else{
    numberOfRequestsForUser[userId] = 1;
    next();
  }
})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
})
const PORT =3000;
app.listen(PORT ,() =>{
  console.log('server is running on port $ {PORT}');
});