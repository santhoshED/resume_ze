'use strict';
const express = require ('express');
const server = express();

const bodyParser= require('body-parser');
server.use(bodyParser.urlencoded({extended: true}));

const path = require('path');
server.use('/images',express.static(path.join(__dirname,'images')));
server.use('/scripts',express.static(path.join(__dirname,'scripts')));
server.use('/css',express.static(path.join(__dirname,'css')));

const preview = require('./preview.js');





server.get('/',(req,res)=>{res.sendFile(__dirname +'/form.html')});

server.get('/form.js',(req,res)=>{res.sendFile(__dirname + '/form.js')});	


server.post('/preview', preview);


server.listen(15969,() => {console.log('server has started on 15969')});



