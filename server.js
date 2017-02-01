'use strict';
const express = require ('express');
const server = express();
var basicAuth = require('basic-auth');

var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === 'resume_zemoso' && user.pass === 'osomez@semuser') {
    return next();
  } else {
    return unauthorized(res);
  };
};

const bodyParser= require('body-parser');
server.use(bodyParser.urlencoded({extended: true}));

const path = require('path');
server.use('/images',express.static(path.join(__dirname,'images')));
server.use('/scripts',express.static(path.join(__dirname,'scripts')));
server.use('/css',express.static(path.join(__dirname,'css')));

const preview = require('./preview.js');



server.get('/',auth,(req,res)=>{res.sendFile(__dirname +'/form.html')});

server.get('/form.js',(req,res)=>{res.sendFile(__dirname + '/form.js')});		


server.post('/preview', preview);


server.listen(80,() => {console.log('server has started on 80')});



