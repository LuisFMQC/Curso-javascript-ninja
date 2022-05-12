'use strict';

var express = require('express');
var cors = require('cors');
var app = express();

var users = {
  joao: {
    nome: 'João',
    idade: 30
  },
  maria: {
    nome: 'Maria',
    idade: 18
  },
  fernando: {
    nome: 'Fernando',
    idade: 28
  }
};

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

app.listen(3000);
