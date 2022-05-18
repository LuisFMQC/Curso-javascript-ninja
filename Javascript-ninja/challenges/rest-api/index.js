'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var users = {
  joao: {
    username: 'João',
    age: 30
  },
  maria: {
    username: 'Maria',
    age: 18
  },
  fernando: {
    username: 'Fernando',
    age: 28
  }
};

app.use(bodyParser.urlencoded( { extended: false } ));
app.use(cors());

app.get('/', function(req, res){
  res.send('<h1>Home</h1>');
});

app.get('/user', function(req, res){
  res.send('user');
});

app.get('/user/:username', function(req, res){
  var username = req.params.username;
  if(users[username])
    return res.json(users[username]);
  res.status(404).json({ error: 'Usuário não encontrado!'});
});

app.post('/user', function(req, res){
  req.body
})

app.listen(3000);
